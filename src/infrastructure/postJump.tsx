import axios, { AxiosInstance } from 'axios';
import https from 'https';
import { Jump } from '../domain/Jump';
import { ResponseBack } from '../domain/ResponseBack';

export const sentJump = async (
  url: string,
  data: Jump
): Promise<ResponseBack> => {
  // Define Axios Instance
  const instance: AxiosInstance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  // Define options with headers
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'React-modifier': 'true',
    },
  };

  // Execute Post
  try {
    let response: any;
    response = await instance.post(url, JSON.stringify(data), options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
