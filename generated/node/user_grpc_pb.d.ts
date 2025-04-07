// GENERATED CODE -- DO NOT EDIT!

// package: user
// file: user.proto

import * as user_pb from "./user_pb";
import * as grpc from "grpc";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUserByUsername: grpc.MethodDefinition<user_pb.GetUserByUsernameRequest, user_pb.GetUserResponse>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
  getUserByUsername: grpc.handleUnaryCall<user_pb.GetUserByUsernameRequest, user_pb.GetUserResponse>;
}

export class UserClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUserByUsername(argument: user_pb.GetUserByUsernameRequest, callback: grpc.requestCallback<user_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUserByUsername(argument: user_pb.GetUserByUsernameRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUserByUsername(argument: user_pb.GetUserByUsernameRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUserResponse>): grpc.ClientUnaryCall;
}
