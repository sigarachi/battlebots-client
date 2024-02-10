import React from 'react';
import { useEffect } from 'react';
import { User } from '@services/user';
import { useLazyGetUserQuery } from '@store/api/user';

import { useUser } from '../hooks';

type WrappedComponentProps<T> = {
	isAuth: boolean;
	user?: User;
} & T;

export const withAuth = <T,>(
	WrappedComponent: React.ComponentType<WrappedComponentProps<T>>
) => {
	const WrappedComponentContainer = (props: T) => {
		const [fetch, info] = useLazyGetUserQuery();

		const user = useUser();

		const { isUninitialized } = info;

		useEffect(() => {
			if (!user || !isUninitialized) fetch();
		}, []);

		return <WrappedComponent {...props} isAuth={!!user} user={user} />;
	};

	return WrappedComponentContainer;
};
