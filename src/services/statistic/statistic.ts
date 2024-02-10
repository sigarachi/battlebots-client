import { options } from '@config/globals';
import { CommonResponse, network } from '@services/network';
import { GetCurrentStatResponse, GetStatResponse } from './interfaces';

export class Statistic {
	private static url = `${options.BASE_URL}`;

	static async getCurrentStat(): Promise<
		CommonResponse<GetCurrentStatResponse>
	> {
		const { data } = await network.get<CommonResponse<GetCurrentStatResponse>>(
			`${this.url}/competition`
		);

		return data;
	}

	static async getStat(): Promise<CommonResponse<GetStatResponse>> {
		const { data } = await network.get<CommonResponse<GetStatResponse>>(
			`${this.url}/history`
		);

		return data;
	}
}
