import { options } from '@config/globals';
import { CommonResponse, network } from '@services/network';

import { CreateTokenArgs, TokenResponse } from './interfaces';

export class TokenService {
	private static url = `${options.BASE_URL}/middleware/api/v1`;

	static async getTokens(): Promise<CommonResponse<TokenResponse>> {
		const { data } = await network.get<CommonResponse<TokenResponse>>(
			`${this.url}/token`
		);

		return data;
	}

	static async createToken(
		args: CreateTokenArgs
	): Promise<CommonResponse<void>> {
		const { data } = await network.post<CommonResponse<void>>(
			`${this.url}/token`,
			{
				...args,
			}
		);

		return data;
	}
}
