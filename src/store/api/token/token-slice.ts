import { apiSlicePromiseWrapper } from '@utils/promise-wrapper';

import { apiSlice } from '../api';
import { CommonResponse } from '@services/network';
import { CreateTokenArgs, TokenResponse, TokenService } from '@services/tokens';

export const tokenApi = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getTokens: build.query<CommonResponse<TokenResponse>, void>({
			queryFn: () => apiSlicePromiseWrapper(() => TokenService.getTokens()),
			providesTags: ['TOKENS'],
		}),
		createToken: build.mutation<CommonResponse<void>, CreateTokenArgs>({
			queryFn: (args: CreateTokenArgs) =>
				apiSlicePromiseWrapper(() => TokenService.createToken(args)),
			invalidatesTags: ['TOKENS'],
		}),
	}),
});

export const { useGetTokensQuery, useCreateTokenMutation } = tokenApi;
