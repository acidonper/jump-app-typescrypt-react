import * as jspb from 'google-protobuf'



export class JumpReq extends jspb.Message {
  getCount(): number;
  setCount(value: number): JumpReq;

  getMessage(): string;
  setMessage(value: string): JumpReq;

  getJumpsList(): Array<string>;
  setJumpsList(value: Array<string>): JumpReq;
  clearJumpsList(): JumpReq;
  addJumps(value: string, index?: number): JumpReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JumpReq.AsObject;
  static toObject(includeInstance: boolean, msg: JumpReq): JumpReq.AsObject;
  static serializeBinaryToWriter(message: JumpReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JumpReq;
  static deserializeBinaryFromReader(message: JumpReq, reader: jspb.BinaryReader): JumpReq;
}

export namespace JumpReq {
  export type AsObject = {
    count: number,
    message: string,
    jumpsList: Array<string>,
  }
}

export class Response extends jspb.Message {
  getCode(): number;
  setCode(value: number): Response;

  getMessage(): string;
  setMessage(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    code: number,
    message: string,
  }
}

