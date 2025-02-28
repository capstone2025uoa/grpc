// package: product
// file: product.proto

import * as jspb from "google-protobuf";

export class GetProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProductRequest): GetProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProductRequest;
  static deserializeBinaryFromReader(message: GetProductRequest, reader: jspb.BinaryReader): GetProductRequest;
}

export namespace GetProductRequest {
  export type AsObject = {
    productId: string,
  }
}

export class ListProductsRequest extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageNumber(): number;
  setPageNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsRequest): ListProductsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsRequest;
  static deserializeBinaryFromReader(message: ListProductsRequest, reader: jspb.BinaryReader): ListProductsRequest;
}

export namespace ListProductsRequest {
  export type AsObject = {
    category: string,
    pageSize: number,
    pageNumber: number,
  }
}

export class ProductResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getCategory(): string;
  setCategory(value: string): void;

  getStock(): number;
  setStock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductResponse): ProductResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductResponse;
  static deserializeBinaryFromReader(message: ProductResponse, reader: jspb.BinaryReader): ProductResponse;
}

export namespace ProductResponse {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    stock: number,
  }
}

export class ListProductsResponse extends jspb.Message {
  clearProductsList(): void;
  getProductsList(): Array<ProductResponse>;
  setProductsList(value: Array<ProductResponse>): void;
  addProducts(value?: ProductResponse, index?: number): ProductResponse;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  getPageCount(): number;
  setPageCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProductsResponse): ListProductsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProductsResponse;
  static deserializeBinaryFromReader(message: ListProductsResponse, reader: jspb.BinaryReader): ListProductsResponse;
}

export namespace ListProductsResponse {
  export type AsObject = {
    productsList: Array<ProductResponse.AsObject>,
    totalCount: number,
    pageCount: number,
  }
}

