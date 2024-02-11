import { apiSlicePromiseWrapper } from '@utils/promise-wrapper';

import { apiSlice } from '../api';
import { CommonResponse } from '@services/network';
import {
	GetCurrentStatResponse,
	GetStatResponse,
	Statistic,
} from '@services/statistic';

export const statApi = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getStat: build.query<CommonResponse<GetStatResponse>, void>({
			queryFn: () => apiSlicePromiseWrapper(() => Statistic.getStat()),
			providesTags: ['STAT'],
		}),
		getCurrentStat: build.query<CommonResponse<GetCurrentStatResponse>, void>({
			queryFn: () => apiSlicePromiseWrapper(() => Statistic.getCurrentStat()),
			providesTags: ['STAT'],
		}),
	}),
});

export const { useGetStatQuery, useGetCurrentStatQuery } = statApi;
