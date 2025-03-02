// GENERATED CODE -- DO NOT EDIT!

// package: myservice
// file: greeter.proto

import * as greeter_pb from "./greeter_pb";
import * as grpc from "grpc";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<greeter_pb.HelloRequest, greeter_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<greeter_pb.HelloRequest, greeter_pb.HelloReply>;
}

export class GreeterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sayHello(argument: greeter_pb.HelloRequest, callback: grpc.requestCallback<greeter_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: greeter_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<greeter_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: greeter_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<greeter_pb.HelloReply>): grpc.ClientUnaryCall;
}
