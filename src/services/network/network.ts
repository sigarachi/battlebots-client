import { options } from '@config/globals';
import { hasOwnProperty } from '@utils/has-own-property';
import axios from 'axios';

export const network = axios.create({
	baseURL: options.BASE_URL,
	headers: {
		'Content-Type': 'application/json',
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

	return Promise.resolve(response);
});
