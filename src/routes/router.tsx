import React from 'react';
import { useRoutes } from 'react-router-dom';
import { withAuth } from '@hocs/with-auth';

import { AUTH_ROUTES, UNAUTH_ROUTES } from './routes';

export const Router = withAuth(({ isAuth }): React.ReactElement | null => {
	const routes = isAuth ? AUTH_ROUTES : UNAUTH_ROUTES;

	const element = useRoutes(routes);

	return element;
});
