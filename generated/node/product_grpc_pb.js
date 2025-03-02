// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');

function serialize_product_GetProductRequest(arg) {
  if (!(arg instanceof product_pb.GetProductRequest)) {
    throw new Error('Expected argument of type product.GetProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductRequest(buffer_arg) {
  return product_pb.GetProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ListProductsRequest(arg) {
  if (!(arg instanceof product_pb.ListProductsRequest)) {
    throw new Error('Expected argument of type product.ListProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ListProductsRequest(buffer_arg) {
  return product_pb.ListProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ListProductsResponse(arg) {
  if (!(arg instanceof product_pb.ListProductsResponse)) {
    throw new Error('Expected argument of type product.ListProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ListProductsResponse(buffer_arg) {
  return product_pb.ListProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductResponse(arg) {
  if (!(arg instanceof product_pb.ProductResponse)) {
    throw new Error('Expected argument of type product.ProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductResponse(buffer_arg) {
  return product_pb.ProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Define the Product service
var ProductService = exports.ProductService = {
  // Get a specific product by ID
getProduct: {
    path: '/product.Product/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.GetProductRequest,
    responseType: product_pb.ProductResponse,
    requestSerialize: serialize_product_GetProductRequest,
    requestDeserialize: deserialize_product_GetProductRequest,
    responseSerialize: serialize_product_ProductResponse,
    responseDeserialize: deserialize_product_ProductResponse,
  },
  // List all products, optionally filtered by category
listProducts: {
    path: '/product.Product/ListProducts',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.ListProductsRequest,
    responseType: product_pb.ListProductsResponse,
    requestSerialize: serialize_product_ListProductsRequest,
    requestDeserialize: deserialize_product_ListProductsRequest,
    responseSerialize: serialize_product_ListProductsResponse,
    responseDeserialize: deserialize_product_ListProductsResponse,
  },
};

exports.ProductClient = grpc.makeGenericClientConstructor(ProductService, 'Product');
