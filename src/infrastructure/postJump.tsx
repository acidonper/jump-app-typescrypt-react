import axios from "axios";
import { Jump } from "../domain/Jump";
import { Response as ResponseBack } from '../domain/Response';

export const sentJump = async (
    data: Jump
  ): Promise<ResponseBack> => {

    //const url: string = "http://golang-demo-git-myapp.apps.68.sandbox1017.opentlc.com/jump"
    const url: string = "http://localhost:8442/jump"
    const options = { 
      headers: { 
        'Content-Type': "application/json", 
        'React-modifier': "true" 
      } 
    }
  
    try {
      const response = await axios.post(url, JSON.stringify(data), options);
      return response.data;
    } catch (error) {
      console.log(error)
      return error;
    }
  };