import axios from 'axios';
import { options } from '@config/globals';
import { hasOwnProperty } from '@utils/has-own-property';

export const network = axios.create({
	baseURL: options.BASE_URL,
	headers: {
		'Content-type': 'application/json',
	},
	withCredentials: true,
});

network.interceptors.response.use(function (response) {
	if (
		hasOwnProperty(response.data, 'statusCode') &&
		response.data.statusCode !== 0
	) {
		throw new Error(response.data.statusCode);
	}

	return response;
});