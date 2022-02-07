import * as grpcWeb from 'grpc-web';
import {JumpServiceClient} from '../utils/grpc/JumpServiceClientPb';
import {JumpReq, Response} from '../utils/grpc/jump_pb';
import { ResponseBack } from '../domain/ResponseBack';

export const sentJumpGrpc = async (
    url: string,
    dataJump: string[]
  ): Promise <ResponseBack> => {
    return new Promise<ResponseBack>(function(resolve) {
      const jumpService = new JumpServiceClient(url, null, null);
      var finalResponse: Response.AsObject = {code: 500, message: "/jump - Farewell from Backend - " + url};

      const request = new JumpReq();
      request.setMessage('Hello from React!');
      request.setCount(0)
      request.setJumpsList(dataJump)

      const call = jumpService.jump(request, {'Content-Type': 'application/grpc'},
      (err: grpcWeb.RpcError, response: Response) => {
          try {
            console.log(response.getMessage());
            finalResponse.code = response.getCode();
            finalResponse.message = response.getMessage();
            resolve(finalResponse);
          } catch {
            console.log("empty Response - ", err)
            resolve(finalResponse);
          }
      });
      call.on('status', (status: grpcWeb.Status) => {
          if (status.metadata) {
              console.log('Received metadata');
              console.log(status);
            }
      });
    });
}