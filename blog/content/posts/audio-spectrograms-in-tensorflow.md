---
title: "Audio Spectrograms in Tensorflow"
date: 2018-05-24T00:05:00-03:00
tags: [
  "AI",
  "Tensorflow",
  "Sound Processing"
]
draft: false
---

A Spectrogram is a picture of sound. A common approach for audio classification tasks is to use spectrograms as input and simply treat the audio as an image. After several tries I finally got an optimized way to integrate the spectrogram generation pipeline into the tensorflow computational graph.

<!--more-->

---

We have a model for audio classification here at [FluxoTi](http://fluxoti.com) running in production running about 100 thousand times a day for about one and a half year now. As we started researching about audio classification, we see that several people have achieved good results using [Convolutional Neural Networks](http://cs231n.github.io/convolutional-networks) applied on audio spectrograms. Our only problem was how to generate those spectrograms prior to feed then to the model 🤔.

## 1. The naive approach

In the first release of the project we have basically two applications: the tfrecords / train / eval tensorflow pipeline written in python and the production api written in Go.

Yes, we do serve the tensorflow exported model from Go, using CGO... **What a mistake.**

I mean, using Go was not a mistake, it's an incredible language and I love it. But serving the tensorflow model from Go (using the tensorflow CGO wrapper) use a LOT of ram after some weeks, reaching about 1GB each instance... Probably was a sort of memory leak, I tried to debug it but CGO is always on the way...

To generate the spectrogram in this first release we decided to use sox, it's a common command line utility for audio conversion and manipulation. Basically what we did was get the audio in the API and then save on disk, run the sox on the received sample, saving the generated spectrogram and then load the image bytes into a Tensorflow Tensor that we feed into the model.

Something like this:

```bash
sox audio.gsm -n spectrogram -x 128 -y 128 -A -z 50 -Z -20 -r -o spectrogram.png
```

However tests in production showed that we are hitting storage too hard. Storing and reading from disk about 2 or 3 times per request was pretty bad, so we cut out storage usage by using [pipes](http://www.linfo.org/pipes.html) everywhere:

```bash
 # In Go we fill the sox stdin with a buffer containing the gsm audio bytes
 # readed directly from request.
 sox -t gsm - -n spectrogram -x 128 -y 128 -A -z 50 -Z -20 -r -o -
 # PNG encoded image is contained in stdout buffer.
```

> We also found a known [sox bug](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=823417) with input/output pipes on Debian, which we solve compiling from source.

## 2. Improving the spectrogram generation

A couple of months ago I begin to refactor the project to use [Tensorflow Serving](https://www.tensorflow.org/serving/). The api was also lightweight now, it talks Protobuf through gRPC to the serving service and we don't have more memory leaks to worry about 😅. Each serving pod uses around 50MB of ram and the api 20MB. We keep the same sox approach as described above.

But sox isn't perfect... Segfaults happen randomly and the api cpu usage is higher bacause of the encoding / decoding operations.

Reading about the tensorflow contrib package I found some interesting ops, including a `audio_spectrogram`. With some work I replaced the entire sox pipeline by using the tensorflow computations, the api no longer deal with the preprocessing stuff. The only downside is that the ffmpeg ops don't support gsm, however it's ok for us to use wav instead.

Here's an adapted example that you can run by itself:

```python
import tensorflow as tf
from tensorflow.contrib.framework.python.ops import audio_ops

# Wav file name
wav_file = tf.placeholder(tf.string)

# Read the wav file
audio_binary = tf.read_file(wav_file)

# Decode the wav mono into a 2D tensor with time in dimension 0
# and channel along dimension 1
waveform = audio_ops.decode_wav(audio_binary, file_format='wav', desired_channels=1)

# Compute the spectrogram
spectrogram = audio_ops.audio_spectrogram(
        waveform.audio,
        window_size=1024,
        stride=64)

# Custom brightness
brightness = tf.placeholder(tf.float32, shape=[])
mul = tf.multiply(spectrogram, brightness)

# Normalize pixels
min_const = tf.constant(255.)
minimum =  tf.minimum(mul, min_const)

# Expand dims so we get the proper shape
expand_dims = tf.expand_dims(minimum, -1)

# Resize the spectrogram to input size of the model
resize = tf.image.resize_bilinear(expand_dims, [128, 128])

# Remove the trailing dimension
squeeze = tf.squeeze(resize, 0)

# Tensorflow spectrogram has time along y axis and frequencies along x axis
# so we fix that
squeeze = tf.image.flip_left_right(squeeze)
squeeze = tf.image.transpose_image(squeeze)

# Convert image to 3 channels, it's still a grayscale image however
squeeze = tf.image.grayscale_to_rgb(squeeze)

# Cast to uint8 and encode as png
cast = tf.cast(squeeze, tf.uint8)
png = tf.image.encode_png(cast)

with tf.Session() as sess:
    # Run the computation graph and save the png encoded image to a file
    image = sess.run(png, feed_dict={
      wav_file: 'your_file.wav', brightness: 100})

    with open('output.png', 'wb') as f:
        f.write(image)
```

And it's pretty fast too, we reach about **30 to 50 milliseconds** including the preprocessing stuff and the model inference, that's pretty cool.

See you again next time 😄.
