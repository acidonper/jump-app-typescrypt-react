import axios from 'axios';
import { Jump } from '../domain/Jump';
import { ResponseBack } from '../domain/ResponseBack';

export const sentJump = async (
  url: string,
  data: Jump
): Promise<ResponseBack> => {
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
    response = await axios.post(url, JSON.stringify(data), options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
