import React from 'react';
import { FlexProps } from './interfaces';
import { FlexContainer } from './styles';

export const Flex: React.FC<FlexProps> = ({
	children,
	...props
}): React.ReactElement => {
	return <FlexContainer {...props}>{children}</FlexContainer>;
};
