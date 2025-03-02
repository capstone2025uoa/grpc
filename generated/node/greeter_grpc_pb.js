// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var greeter_pb = require('./greeter_pb.js');

function serialize_myservice_HelloReply(arg) {
  if (!(arg instanceof greeter_pb.HelloReply)) {
    throw new Error('Expected argument of type myservice.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myservice_HelloReply(buffer_arg) {
  return greeter_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myservice_HelloRequest(arg) {
  if (!(arg instanceof greeter_pb.HelloRequest)) {
    throw new Error('Expected argument of type myservice.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myservice_HelloRequest(buffer_arg) {
  return greeter_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Define the gRPC service
var GreeterService = exports.GreeterService = {
  // The SayHello RPC takes a HelloRequest and returns a HelloReply
sayHello: {
    path: '/myservice.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeter_pb.HelloRequest,
    responseType: greeter_pb.HelloReply,
    requestSerialize: serialize_myservice_HelloRequest,
    requestDeserialize: deserialize_myservice_HelloRequest,
    responseSerialize: serialize_myservice_HelloReply,
    responseDeserialize: deserialize_myservice_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService, 'Greeter');
