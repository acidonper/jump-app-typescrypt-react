/**
 * @fileoverview gRPC-Web generated client stub for jump
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck
import * as grpcWeb from 'grpc-web';

import * as jump_jump_pb from './jump_pb';

export class JumpServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoJump = new grpcWeb.MethodDescriptor(
    '/jump.JumpService/Jump',
    grpcWeb.MethodType.UNARY,
    jump_jump_pb.JumpReq,
    jump_jump_pb.Response,
    (request: jump_jump_pb.JumpReq) => {
      return request.serializeBinary();
    },
    jump_jump_pb.Response.deserializeBinary
  );

  jump(
    request: jump_jump_pb.JumpReq,
    metadata: grpcWeb.Metadata | null): Promise<jump_jump_pb.Response>;

  jump(
    request: jump_jump_pb.JumpReq,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: jump_jump_pb.Response) => void): grpcWeb.ClientReadableStream<jump_jump_pb.Response>;

  jump(
    request: jump_jump_pb.JumpReq,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: jump_jump_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jump.JumpService/Jump',
        request,
        metadata || {},
        this.methodInfoJump,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jump.JumpService/Jump',
    request,
    metadata || {},
    this.methodInfoJump);
  }

}

