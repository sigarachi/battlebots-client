import { ReactElement } from 'react';

export interface LayoutProps {
	children: ReactElement | string;
	classNames?: string;
	blockNavigation?: boolean;
}
