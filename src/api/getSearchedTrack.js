import { SEARCH } from "@/url";
import { getToken } from "@/token";
import axios from "axios";

export const searchTracks = async (property) => {
  try {
    const accessToken = await getToken();

    if (property.query) {
      const result = await axios.get(`${SEARCH}${property.query}&type=track`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

     
      return result.data;
    } else {
    
      return;
    }
  } catch (error) {
    console.error("Ошибка при поиске", error);
    throw error;
  }
};
