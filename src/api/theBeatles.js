

import { GET_PLAYLIST } from "@/url";

import { getToken } from "@/token";
import axios from "axios";



const theBeatlesiD = '4z5HP8aTGNYX8iK614olXz'

export const getBeatles = async () => {

	try {
		const accessToken = await getToken(); 
	
		const result = await axios.get(
	
			`${GET_PLAYLIST}${theBeatlesiD}`, {
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