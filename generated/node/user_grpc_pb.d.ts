// GENERATED CODE -- DO NOT EDIT!

// package: user
// file: user.proto

import * as user_pb from "./user_pb";
import * as grpc from "grpc";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUser: grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.GetUserResponse>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
  getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.GetUserResponse>;
}

export class UserClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUser(argument: user_pb.GetUserRequest, callback: grpc.requestCallback<user_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: user_pb.GetUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: user_pb.GetUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUserResponse>): grpc.ClientUnaryCall;
}
