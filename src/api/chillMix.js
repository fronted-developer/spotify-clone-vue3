import { GET_PLAYLIST } from "@/url";

import { getToken } from "@/token";
import { ref } from "vue";
import axios from "axios";


const chillId = '16hGmE5A71ibxQeJTT0l3n'

export const getPlaylist = async () => {
	try {
		const accessToken = await getToken(); 
	
		const result = await axios.get(
	
			`${GET_PLAYLIST}${chillId}`, {
				method: "GET",
				headers: {
					'Content-Type': "application/json",
					'Authorization': `Bearer ${accessToken}`
				}
			})

		
	

		return result.data

		
	} catch (error) {
		console.log("Ошибка при получении плейлиста");
	}

 }