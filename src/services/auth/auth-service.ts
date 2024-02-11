import { options } from '@config/globals';
import { CommonResponse, network } from '@services/network';

export class AuthService {
	private static url = `/crm`;

	static async authYandex(): Promise<void> {
		return network.get(`${this.url}/view/redirect`);
	}

	static async auth(): Promise<CommonResponse<void> | undefined> {
		try {
			const { data } = await network.get<CommonResponse<void>>(
				`${this.url}/view/redirect`
			);

			return data;
		} catch (e) {
			switch ((e as Error).message) {
				case '3000':
					window.location.href = '/lk';
					break;
				case '3001':
					window.location.href = '/register';
					break;
				case '3002':
					window.location.href = '/blocked';
					break;
				default:
					throw e;
			}
		}
	}

	static async completeRegistration(
		nickName: string
	): Promise<CommonResponse<void>> {
		return network.post(`${this.url}/api/v1/auth/completeRegistration`, {
			nickName,
		});
	}

	static async logout(): Promise<void> {
		return network.get(`${this.url}/logout`);
	}
}
