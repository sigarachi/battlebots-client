import React from 'react';
import { useEffect } from 'react';
import { User } from '@services/user';
import { useLazyGetUserQuery } from '@store/api/user';

import { useUser } from '../hooks';
import { useNavigate } from 'react-router-dom';

type WrappedComponentProps<T> = {
	isAuth: boolean;
	user?: User;
} & T;

export const withAuth = <T,>(
	WrappedComponent: React.ComponentType<WrappedComponentProps<T>>
) => {
	const WrappedComponentContainer = (props: T) => {
		const [fetch, info] = useLazyGetUserQuery();
		const navigate = useNavigate();

		const user = useUser();

		const { isUninitialized } = info;

		useEffect(() => {
			if (info.error) {
				if (info.error === '3001') {
					navigate('/register');
				}

				if (info.error === '3002') {
					navigate('/blocked');
				}
			}
			if (!info.error || !user || !isUninitialized) fetch();
		}, [info.error]);

		return <WrappedComponent {...props} isAuth={!!user} user={user} />;
	};

	return WrappedComponentContainer;
};
