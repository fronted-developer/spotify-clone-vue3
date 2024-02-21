import { GET_TRACK } from "@/url";

import { getToken } from "@/token";
import axios from "axios";

export const getTrack = async (trackId) => {
  try {
    const accessToken = await getToken();

    const result = await axios.get(`${GET_TRACK}${trackId}`, {
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