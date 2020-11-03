import axios from "axios";
import { Jump } from "../domain/Jump";
import { Response as ResponseBack } from '../domain/Response';



export const sentJump = async (
    url: string, data: Jump, calls: number, callsInterval: number
  ): Promise<ResponseBack> => {

    const timeout = async (ms: number) => {
      return new Promise(resolve => setTimeout(resolve, ms*1000));
    }

    const options = { 
      headers: { 
        'Content-Type': "application/json", 
        'React-modifier': "true" 
      } 
    }
  
    try {
      let response: any
      for (let index = 0; index < calls; index++) {
        await timeout(callsInterval)
        response = await axios.post(url, JSON.stringify(data), options);
      }
      // Sent the last result
      return response.data;
    } catch (error) {
      console.log(error)
      return error;
    }
  };