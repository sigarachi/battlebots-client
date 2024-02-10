import { User, UserService } from '@services/user';
import { apiSlicePromiseWrapper } from '@utils/promise-wrapper';

import { apiSlice } from '../api';

export const userApi = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getUser: build.query<User | undefined, void>({
			queryFn: () => apiSlicePromiseWrapper(() => UserService.getUser()),
			providesTags: ['USER'],
		}),
	}),
});

export const { useGetUserQuery, useLazyGetUserQuery } = userApi;
