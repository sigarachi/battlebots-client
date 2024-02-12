import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { withAuth } from '@hocs/with-auth';

import { AUTH_ROUTES, UNAUTH_ROUTES } from './routes';
import { paths } from './constants';
import { Layout } from '@components/layout';
import { CompleteRegistration } from '@pages/complete-registration';
import { Blocked } from '@pages/blocked';

export const Router = withAuth(({ isAuth }): React.ReactElement | null => {
	const routes = isAuth ? AUTH_ROUTES : UNAUTH_ROUTES;

	const element = useRoutes([
		...routes,
		{
			path: paths.completeRegistration,
			element: (
				<Layout blockNavigation>
					<CompleteRegistration />
				</Layout>
			),
		},
		{
			path: paths.blocked,
			element: (
				<Layout blockNavigation>
					<Blocked />
				</Layout>
			),
		},
		{
			path: '*',
			element: <Navigate to={'/'} />,
		},
	]);

	return element;
});
