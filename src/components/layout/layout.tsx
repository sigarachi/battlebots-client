import { LayoutProps } from './interfaces';
import React, { FC } from 'react';
import { LayoutWrapper } from './styles';
import { Flex } from '@components/flex';
import { Navigation } from '@components/navigation/navigation';

export const Layout: FC<LayoutProps> = ({
	children,
	classNames,
}): React.ReactElement => {
	return (
		<LayoutWrapper className={classNames}>
			<Flex
				height="100%"
				direction="column"
				classNames="bg-white p-5 rounded-xl shadow-xl">
				<Navigation />
				{children}
			</Flex>
		</LayoutWrapper>
	);
};
