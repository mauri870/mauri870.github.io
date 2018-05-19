---
title: "How to use a Golang client Tensorflow Serving Inception model"
date: 2018-05-19T12:35:00-03:00
tags: [
  "Go",
  "Tensorflow",
  "Tensorflow Serving",
  "AI",
]
draft: false
---

Tensorflow Serving is the most optimized way to serve a Tensorflow machine learning model in production. The official tutorials only cover the python client, so lets implement a Go/Golang one.

<!--more-->

---

We have a Tensorflow Deep Learning model here at [FluxoTi](http://fluxoti.com) for sound classification and we need a way to serve it with the best performance since this model runs about 100 thousand times a day. The solution was simple, [Tensorflow Serving](https://github.com/tensorflow/serving), a high-performance and flexible system for machine learning models.

## 1. Train and export the model

Since Tensorflow Serving is designed to serve Tensorflow models, we first need to train one. For the sake of simplicity, you can follow the [tutorials](https://www.tensorflow.org/serving/serving_inception) in order to export a pre-treined inception model. You can skip the Kubernetes part, we only need the final image with the compiled tensorflow serving server and the exported model. I'll probably write a post in the feature about how to export a custom model.

## 2. Preparing the proto files

Tensorflow Serving is written in C++, exposing a gRPC server that talks Protobuf. In order to make a Go client, we must compile the protobuf files first to generate all the boilerplate code for Go, yeah protobuf is really cool hum :smile:.

First of all clone the tensorflow serving repository:

```bash
git clone https://github.com/tensorflow/serving.git
```

Since the serving proto files depends on the tensorflow ones, clone the tensorflow repo too:

```bash
git clone https://github.com/tensorflow/serving.git
```

> Maybe using bazel you don't need to do these steps manually, but who uses bazel?? Probably only Google...

Then you need the protoc compiler, get it [here](github.com/google/protobuf). And of course the golang protobuf plugin, [here](https://github.com/golang/protobuf).

Now you can compile the protos:

```bash
PROTOC_OPTS='-I tensorflow -I serving --go_out=plugins=grpc:vendor'

eval "protoc $PROTOC_OPTS lib/serving/tensorflow_serving/apis/*.proto"
eval "protoc $PROTOC_OPTS lib/serving/tensorflow_serving/config/*.proto"
eval "protoc $PROTOC_OPTS lib/serving/tensorflow_serving/util/*.proto"
eval "protoc $PROTOC_OPTS lib/serving/tensorflow_serving/sources/storage_path/*.proto"
eval "protoc $PROTOC_OPTS lib/tensorflow/tensorflow/core/framework/*.proto"
eval "protoc $PROTOC_OPTS lib/tensorflow/tensorflow/core/example/*.proto"
eval "protoc $PROTOC_OPTS lib/tensorflow/tensorflow/core/lib/core/*.proto"
eval "protoc $PROTOC_OPTS lib/tensorflow/tensorflow/core/protobuf/{saver,meta_graph}.proto"
```

Running this will create a directory called `tensorflow` and `tensorflow_serving` in the vendor directory.

## 3. The Inception Go client

You need the protobuf wrappers:

```bash
go get github.com/golang/protobuf/ptypes/wrappers
```

Don't forget to run the serving server:

```bash
docker run --rm -p 10000:10000 your_serving_image
```

And here is the client code:

```golang
package main

import (
	"context"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	tf_core_framework "tensorflow/core/framework"
	pb "tensorflow_serving/apis"

	google_protobuf "github.com/golang/protobuf/ptypes/wrappers"

	"google.golang.org/grpc"
)

func main() {
	servingAddress := flag.String("serving-address", "localhost:10000", "The tensorflow serving address")
	flag.Parse()

	if flag.NArg() != 1 {
    fmt.Println("Usage: " + os.Args[0] + " --serving-address localhost:10000 path/to/img.png")
		os.Exit(1)
	}

	imgPath, err := filepath.Abs(flag.Arg(0))
	if err != nil {
		log.Fatalln(err)
	}

	imageBytes, err := ioutil.ReadFile(imgPath)
	if err != nil {
		log.Fatalln(err)
	}

	request := &pb.PredictRequest{
		ModelSpec: &pb.ModelSpec{
			Name:          "inception",
			SignatureName: "predict_images",
			Version: &google_protobuf.Int64Value{
				Value: int64(1),
			},
		},
		Inputs: map[string]*tf_core_framework.TensorProto{
			"images": &tf_core_framework.TensorProto{
				Dtype: tf_core_framework.DataType_DT_STRING,
				TensorShape: &tf_core_framework.TensorShapeProto{
					Dim: []*tf_core_framework.TensorShapeProto_Dim{
						&tf_core_framework.TensorShapeProto_Dim{
							Size: int64(1),
						},
					},
				},
				StringVal: [][]byte{imageBytes},
			},
		},
	}

	conn, err := grpc.Dial(*servingAddress, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Cannot connect to the grpc server: %v\n", err)
	}
	defer conn.Close()

	client := pb.NewPredictionServiceClient(conn)

	resp, err := client.Predict(context.Background(), request)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(resp)
}
```

That's it, let's test:

```
go build .
./inception-client --serving-address localhost:10000 path/to/image.png
```

See you again next time 😄.
