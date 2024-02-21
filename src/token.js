import { GET_TOKEN } from "./url";

const client_id = '3578976e4a3946d5a5c489ee9eed60ce'
const secret_id = '1b64934cdf3f45d093b5b504897d9e24'


export const getToken = async () => {
	const result = await fetch(GET_TOKEN, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': 'Basic ' + btoa(client_id + ':' + secret_id)
		},
		body: 'grant_type=client_credentials'
	});
 
	const data = await result.json();
	const accessToken = data.access_token; 

	return accessToken;
 };


