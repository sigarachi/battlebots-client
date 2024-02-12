import { Flex } from '@components/flex';
import {
	Button,
	CircularProgress,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Select,
	SelectItem,
	Snippet,
	useDisclosure,
} from '@nextui-org/react';
import { TokenService, TokenType } from '@services/tokens';
import { apiSlice, useGetTokensQuery } from '@store/api';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Token = (): React.ReactElement => {
	const { data, isLoading, isError } = useGetTokensQuery();
	const dispatch = useDispatch();

	const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

	const [tokenTitle, setTokenTitle] = useState<string>('');
	const [tokenType, setTokenType] = useState<TokenType>(TokenType.DEV);

	const [error, setError] = useState<string>('');

	if (isLoading) {
		return <CircularProgress aria-label="Loading..." />;
	}

	if (isError) {
		return <>Токены не загрузились :(</>;
	}

	const handleSubmit = async () => {
		try {
			setError('');
			await TokenService.createToken({
				title: tokenTitle,
				typeToken: tokenType,
			});
			dispatch(apiSlice.util.invalidateTags(['TOKENS']));
			onClose();
		} catch {
			setError('Что то пошло не так');
		}
	};

	return (
		<Flex direction="column" align="center" gap="24px">
			<p>Токены</p>
			<Button onClick={onOpen}>Добавить новый</Button>
			{data &&
				data.data &&
				data?.data.map((tokenRow) => (
					<Flex direction="row" gap="24px" align="center">
						{
							<>
								<p>{tokenRow.title}</p>
								<p>{tokenRow.type}</p>
								<Snippet symbol="">{tokenRow.id}</Snippet>
							</>
						}
					</Flex>
				))}
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Добавить новый токен
							</ModalHeader>
							<ModalBody>
								{!!error.length && <p>{error}</p>}
								<Select
									label="Тип токена"
									onChange={(e) =>
										setTokenType(e.target.value as unknown as TokenType)
									}>
									<SelectItem key={TokenType.DEV} value={TokenType.DEV}>
										{TokenType.DEV}
									</SelectItem>
									<SelectItem key={TokenType.PROD} value={TokenType.PROD}>
										{TokenType.PROD}
									</SelectItem>
								</Select>
								<Input
									label="Имя токена"
									onChange={(e) => setTokenTitle(e.target.value)}
								/>
							</ModalBody>

							<ModalFooter className="flex flex-col w-full">
								<Button color="primary" onPress={handleSubmit}>
									Добавить
								</Button>
								<Button color="danger" variant="light" onPress={onClose}>
									Назад
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</Flex>
	);
};
