import { Flex } from '@components/flex';
import { Button, Input } from '@nextui-org/react';
import { AuthService } from '@services/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CompleteRegistration = (): React.ReactElement => {
	const [nickName, setNickName] = useState<string>('');

	const navigate = useNavigate();

	const handleComplete = async () => {
		try {
			await AuthService.completeRegistration(nickName);
		} catch (e) {
			if ((e as Error).message === '3000') navigate('/');
		} finally {
			window.location.reload();
		}
	};

	return (
		<Flex
			direction="column"
			gap="24px"
			width="100%"
			height="100%"
			justify="center"
			align="center">
			<p>Почти все! Осталось только указать ник в Telegram</p>
			<Input
				label="Твой ник"
				className=" w-64"
				pattern="^(a-zA-Zа-яА-Я0-9{1,32})$"
				required
				onChange={(e) => setNickName(e.target.value)}
			/>
			<Button onClick={handleComplete}>Завершить регистрацию</Button>
		</Flex>
	);
};
