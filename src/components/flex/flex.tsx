import React from 'react';
import { FlexProps } from './interfaces';
import { FlexContainer } from './styles';

export const Flex: React.FC<FlexProps> = ({
	children,
	classNames,
	...props
}): React.ReactElement => {
	return (
		<FlexContainer className={classNames} {...props}>
			{children}
		</FlexContainer>
	);
};
