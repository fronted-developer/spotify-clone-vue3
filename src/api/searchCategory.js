import { SEARCH } from "@/url";

import { getToken } from "@/token";
import axios from "axios";

export const searchCategory = async (property) => {
  try {
    const accessToken = await getToken();
    if (property.query) {
      const result = await axios.get(`${SEARCH}${property.query}&type=track,album,playlist,artist`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      
      return result.data;
      
    }
    return []

  } catch (error) {
    console.log("Ошибка при поиске");
  }
};
