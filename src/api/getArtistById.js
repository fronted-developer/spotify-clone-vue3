import { GET_ARTIST } from "@/url";

import { getToken } from "@/token";
import axios from "axios";

export const getArtistById = async (id) => {
  try {
    const accessToken = await getToken();

    const result = await axios.get(`${GET_ARTIST}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    

    return result.data
    
  } catch (error) {
    console.log("Ошибка при получении плейлиста");
  }
};
