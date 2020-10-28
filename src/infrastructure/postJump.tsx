import axios from "axios";
import { Jump } from "../domain/Jump";

export const sentJump = async (
    data: Jump
  ): Promise<any> => {
    const createAxios = axios.create({
      timeout: 3000
    });

    const url: string = "http://golang-demo-git-myapp.apps.68.sandbox1017.opentlc.com/jump"
  
    try {
      console.log("Entrando", url, data)
      const response = await createAxios.post(url, JSON.stringify(data));
      console.log(response.data)
      return response;
    } catch (error) {
      console.log(error)
      return error;
    }
  };