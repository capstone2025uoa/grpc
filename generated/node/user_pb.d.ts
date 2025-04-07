// package: user
// file: user.proto

import * as jspb from "google-protobuf";

export class Tag extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    type: string,
    value: string,
  }
}

export class UserData extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): void;
  addTags(value?: Tag, index?: number): Tag;

  getProfilePicture(): string;
  setProfilePicture(value: string): void;

  hasAge(): boolean;
  clearAge(): void;
  getAge(): number;
  setAge(value: number): void;

  getBio(): string;
  setBio(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserData.AsObject;
  static toObject(includeInstance: boolean, msg: UserData): UserData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserData;
  static deserializeBinaryFromReader(message: UserData, reader: jspb.BinaryReader): UserData;
}

export namespace UserData {
  export type AsObject = {
    id: number,
    username: string,
    email: string,
    displayName: string,
    visibility: string,
    tagsList: Array<Tag.AsObject>,
    profilePicture: string,
    age: number,
    bio: string,
  }
}

export class GetUserByUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByUsernameRequest): GetUserByUsernameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserByUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByUsernameRequest;
  static deserializeBinaryFromReader(message: GetUserByUsernameRequest, reader: jspb.BinaryReader): GetUserByUsernameRequest;
}

export namespace GetUserByUsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class GetUserResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserData | undefined;
  setUser(value?: UserData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    user?: UserData.AsObject,
  }
}

