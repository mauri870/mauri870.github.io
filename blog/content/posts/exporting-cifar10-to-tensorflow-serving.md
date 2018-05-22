---
title: "How to export the CIFAR10 model to Tensorflow Serving"
date: 2018-05-21T23:26:10-03:00
tags: [
  "CIFAR10",
  "Tensorflow",
  "Tensorflow Serving",
  "AI",
  "Python"
]
draft: false
---

The CIFAR-10 dataset consists of 60000 32x32 colour images in 10 classes, with 6000 images per class. In this blog post I'll cover how to export a trained CIFAR-10 tensorflow model to Tensorflow Serving.

<!--more-->

---

## 1. Training the CIFAR-10 model

Tensorflow already have a really nice tutorial about the CIFAR10 model, so go ahead and [read it first](https://www.tensorflow.org/tutorials/deep_cnn#cifar-10_model).

When you finish this tutorial, you probably have a trained CIFAR-10 model and a good understanding of how a Convolutional Neural Network works.

## 2. Exporting the model

In order to export the trained model to tensorflow serving, we first need to modify our computational graph to use the tensorflow serving signature.

Save this file as `cifar10_saved_model.py` in the same directory as the cifar10 files.

```python
"""Tensorflow Serving export script for cifar10
"""
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import os
import tensorflow as tf

import cifar10
import cifar10_input

IMAGE_SIZE = cifar10_input.IMAGE_SIZE
NUM_CLASSES = cifar10_input.NUM_CLASSES

FLAGS = tf.app.flags.FLAGS

tf.app.flags.DEFINE_string('checkpoint_dir', '/tmp/cifar10_train',
                           """Directory where to read training checkpoints.""")
tf.app.flags.DEFINE_string('output_dir', '/tmp/cifar10_export',
                           """Directory where to export the model.""")
tf.app.flags.DEFINE_integer('model_version', 1,
                            """Version number of the model.""")

def export():
  with tf.Graph().as_default():
    # Input transformation.
    # Receive a string scalar with the binary contents of the image.
    serialized_tf_example = tf.placeholder(tf.string, name='tf_example')
    feature_configs = {
        'image/encoded': tf.FixedLenFeature(
            shape=[], dtype=tf.string),
    }
    tf_example = tf.parse_single_example(serialized_tf_example, feature_configs)
    encoded_image = tf_example['image/encoded']

    # Decode the image as a 3D tensor ([width, height, channels])
    image = tf.image.decode_image(encoded_image, channels=3)

    # Crop or pad the image to be 24x24x3
    image = tf.image.resize_image_with_crop_or_pad(image, IMAGE_SIZE, IMAGE_SIZE)

    # Cast the image to float32
    image = tf.cast(image, tf.float32)

    # expand dims so we get a 4D tensor [1, 24, 24, 3]
    images = tf.expand_dims(image, 0)

    # Run the tensor through the model (a.k.a inference)
    logits = cifar10.inference(images)

    # Transform output to topK results.
    values, indices = tf.nn.top_k(logits, NUM_CLASSES)

    # Apply softmax so we get normalized values
    normalized_values = tf.nn.softmax(values)

    # Add human readable labels to the integer indices.
    class_descriptions = [
        'airplane',
        'automobile',
        'bird',
        'cat',
        'deer',
        'dog',
        'frog',
        'horse',
        'ship',
        'truck'
    ]
    class_tensor = tf.constant(class_descriptions)
    table = tf.contrib.lookup.index_to_string_table_from_tensor(class_tensor)
    classes = table.lookup(tf.to_int64(indices))

    # Restore variables from training checkpoint.
    variable_averages = tf.train.ExponentialMovingAverage(
        cifar10.MOVING_AVERAGE_DECAY)
    variables_to_restore = variable_averages.variables_to_restore()
    saver = tf.train.Saver(variables_to_restore)

    with tf.Session() as sess:
      # get checkpoint state from checkpoint dir.
      ckpt = tf.train.get_checkpoint_state(FLAGS.checkpoint_dir)
      if ckpt and ckpt.model_checkpoint_path:
        # Restores from checkpoint
        saver.restore(sess, ckpt.model_checkpoint_path)
        # Assuming model_checkpoint_path looks something like:
        #   /my-favorite-path/cifar10_train/model.ckpt-0,
        # extract global_step from it.
        global_step = ckpt.model_checkpoint_path.split('/')[-1].split('-')[-1]
      else:
        print('No checkpoint file found')
        return

      # Export inference model.
      output_path = os.path.join(
          tf.compat.as_bytes(FLAGS.output_dir),
          tf.compat.as_bytes('cifar10'),
          tf.compat.as_bytes(str(FLAGS.model_version)))
      builder = tf.saved_model.builder.SavedModelBuilder(output_path)

      # Build the classification and prediction signatures.
      classify_inputs_tensor_info = tf.saved_model.utils.build_tensor_info(
          serialized_tf_example)
      classes_output_tensor_info = tf.saved_model.utils.build_tensor_info(
          classes)
      scores_output_tensor_info = tf.saved_model.utils.build_tensor_info(normalized_values)

      classification_signature = (
          tf.saved_model.signature_def_utils.build_signature_def(
              inputs={
                  tf.saved_model.signature_constants.CLASSIFY_INPUTS:
                      classify_inputs_tensor_info
              },
              outputs={
                  tf.saved_model.signature_constants.CLASSIFY_OUTPUT_CLASSES:
                      classes_output_tensor_info,
                  tf.saved_model.signature_constants.CLASSIFY_OUTPUT_SCORES:
                      scores_output_tensor_info
              },
              method_name=tf.saved_model.signature_constants.
              CLASSIFY_METHOD_NAME))

      predict_inputs_tensor_info = tf.saved_model.utils.build_tensor_info(encoded_image)
      prediction_signature = (
          tf.saved_model.signature_def_utils.build_signature_def(
              inputs={'images': predict_inputs_tensor_info},
              outputs={
                  'classes': classes_output_tensor_info,
                  'scores': scores_output_tensor_info
              },
              method_name=tf.saved_model.signature_constants.PREDICT_METHOD_NAME
          ))

      # Add the freezed variables and signatures
      legacy_init_op = tf.group(
          tf.tables_initializer(), name='legacy_init_op')
      builder.add_meta_graph_and_variables(
          sess, [tf.saved_model.tag_constants.SERVING],
          signature_def_map={
              'predict_images':
                  prediction_signature,
              tf.saved_model.signature_constants.
              DEFAULT_SERVING_SIGNATURE_DEF_KEY:
                  classification_signature,
          },
          legacy_init_op=legacy_init_op)

      builder.save()
      print('Successfully exported model to %s' % output_path)

def main(argv=None):  # pylint: disable=unused-argument
  if tf.gfile.Exists(FLAGS.output_dir):
    tf.gfile.DeleteRecursively(FLAGS.output_dir)
  tf.gfile.MakeDirs(FLAGS.output_dir)
  export()

if __name__ == '__main__':
  tf.app.run()
```

> Your exported CIFAR10 model will be saved at `/tmp/cifar10_export`.

Now you are ready to serve your model with [Tensorflow Serving](https://www.tensorflow.org/serving/). You can follow the inception tutorial [here](https://www.tensorflow.org/serving/serving_inception#part_0_create_a_docker_image), just change your model name to `cifar10` and adjust the exported folder.

See you again next time 😄.
