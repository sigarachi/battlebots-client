import { AuthPage } from '@pages/auth';
import { Home } from '@pages/home';
import { Statistic } from '@pages/statistic';
import { Token } from '@pages/token';

import { paths } from './constants';
import { RouteElement } from './interfaces';
import { Layout } from '@components/layout';

export const AUTH_ROUTES: Array<RouteElement> = [
	{
		path: paths.home,
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
	{
		path: paths.statistic,
		element: (
			<Layout>
				<Statistic />
			</Layout>
		),
	},
	{
		path: paths.tokens,
		element: (
			<Layout>
				<Token />
			</Layout>
		),
	},
];

export const UNAUTH_ROUTES: Array<RouteElement> = [
	{
		path: paths.home,
		element: <AuthPage />,
	},
];
