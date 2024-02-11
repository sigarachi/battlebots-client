import { Flex } from '@components/flex';
import { OAuth } from '@components/oauth';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import React from 'react';

export const AuthPage = (): React.ReactElement => (
	<Flex width={'100%'} height={'100%'} justify="center" align="center">
		<Card>
			<CardHeader className="flex align-middle justify-center">
				<h2 className="font-medium">Авторизация</h2>
			</CardHeader>
			<Divider />
			<CardBody className="flex gap-3">
				<OAuth />
			</CardBody>
		</Card>
	</Flex>
);
