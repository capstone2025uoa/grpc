// GENERATED CODE -- DO NOT EDIT!

// package: product
// file: product.proto

import * as product_pb from "./product_pb";
import * as grpc from "grpc";

interface IProductService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getProduct: grpc.MethodDefinition<product_pb.GetProductRequest, product_pb.ProductResponse>;
  listProducts: grpc.MethodDefinition<product_pb.ListProductsRequest, product_pb.ListProductsResponse>;
}

export const ProductService: IProductService;

export interface IProductServer extends grpc.UntypedServiceImplementation {
  getProduct: grpc.handleUnaryCall<product_pb.GetProductRequest, product_pb.ProductResponse>;
  listProducts: grpc.handleUnaryCall<product_pb.ListProductsRequest, product_pb.ListProductsResponse>;
}

export class ProductClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getProduct(argument: product_pb.GetProductRequest, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  getProduct(argument: product_pb.GetProductRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  getProduct(argument: product_pb.GetProductRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ProductResponse>): grpc.ClientUnaryCall;
  listProducts(argument: product_pb.ListProductsRequest, callback: grpc.requestCallback<product_pb.ListProductsResponse>): grpc.ClientUnaryCall;
  listProducts(argument: product_pb.ListProductsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ListProductsResponse>): grpc.ClientUnaryCall;
  listProducts(argument: product_pb.ListProductsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<product_pb.ListProductsResponse>): grpc.ClientUnaryCall;
}
