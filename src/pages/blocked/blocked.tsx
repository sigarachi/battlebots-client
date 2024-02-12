import { Flex } from '@components/flex';
import React from 'react';

export const Blocked = (): React.ReactElement => {
	return (
		<Flex width="100%" height="100%" justify="center" align="center">
			<p>Вы заблокированы!</p>
		</Flex>
	);
};
