// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_GetUserByUsernameRequest(arg) {
  if (!(arg instanceof user_pb.GetUserByUsernameRequest)) {
    throw new Error('Expected argument of type user.GetUserByUsernameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserByUsernameRequest(buffer_arg) {
  return user_pb.GetUserByUsernameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserResponse(arg) {
  if (!(arg instanceof user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type user.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserResponse(buffer_arg) {
  return user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  // Retrieves user details based on username
getUserByUsername: {
    path: '/user.User/GetUserByUsername',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserByUsernameRequest,
    responseType: user_pb.GetUserResponse,
    requestSerialize: serialize_user_GetUserByUsernameRequest,
    requestDeserialize: deserialize_user_GetUserByUsernameRequest,
    responseSerialize: serialize_user_GetUserResponse,
    responseDeserialize: deserialize_user_GetUserResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService, 'User');
