import React from 'react';
import { AuthPage } from '@pages/auth';
import { Home } from '@pages/home';
import { Statistic } from '@pages/statistic';
import { Token } from '@pages/token';

import { paths } from './constants';
import { RouteElement } from './interfaces';

export const AUTH_ROUTES: Array<RouteElement> = [
	{
		path: paths.home,
		element: <Home />,
	},
	{
		path: paths.statistic,
		element: <Statistic />,
	},
	{
		path: paths.tokens,
		element: <Token />,
	},
];

export const UNAUTH_ROUTES: Array<RouteElement> = [
	{
		path: paths.home,
		element: <AuthPage />,
	},
];
