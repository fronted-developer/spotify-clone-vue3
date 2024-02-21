import { GET_PLAYLIST_BY_ID } from "@/url";

import { getToken } from "@/token";
import axios from "axios";

export const getPlaylistById = async (id) => {
  try {
    const accessToken = await getToken();

    const result = await axios.get(`${GET_PLAYLIST_BY_ID}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

  

    return result.data;
    
  } catch (error) {
    console.log("Ошибка при получении плейлиста");
  }
};
