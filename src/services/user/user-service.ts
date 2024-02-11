import { options } from '@config/globals';
import { CommonResponse, network } from '@services/network';

import { User } from './interfaces';

export class UserService {
	private static url = `/middleware/api/v1`;

	static async getUser(): Promise<User | undefined> {
		const { data } = await network.get<CommonResponse<User>>(
			`${this.url}/whoami`
		);

		return data?.data;
	}
}
