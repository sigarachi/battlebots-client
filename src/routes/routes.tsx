import { AuthPage } from '@pages/auth';
import { Home } from '@pages/home';
import { Statistic } from '@pages/statistic';
import { Token } from '@pages/token';

import { paths } from './constants';
import { RouteElement } from './interfaces';
import { Layout } from '@components/layout';
import { CompleteRegistration } from '@pages/complete-registration';
import { Blocked } from '@pages/blocked';

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
];

export const UNAUTH_ROUTES: Array<RouteElement> = [
	{
		path: paths.home,
		element: <AuthPage />,
	},
];
