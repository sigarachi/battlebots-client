import { Flex } from '@components/flex';
import {
	CircularProgress,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react';
import { useGetStatQuery } from '@store/api/statistic/statistic-slice';
import React from 'react';

export const Statistic = (): React.ReactElement => {
	const { data, isLoading, isError } = useGetStatQuery();

	if (isLoading) {
		return <CircularProgress aria-label="Loading..." />;
	}

	if (isError) {
		return <>Статистика не загрузилась :(</>;
	}

	return (
		<>
			{(data && data?.data?.length && (
				<Table>
					<TableHeader>
						<TableColumn>ID</TableColumn>
						<TableColumn>Бот 1</TableColumn>
						<TableColumn>Бот 2</TableColumn>
						<TableColumn>Количество побед 1</TableColumn>
						<TableColumn>Количество побед 2</TableColumn>
						<TableColumn>Победитель</TableColumn>
					</TableHeader>
					<TableBody>
						{data?.data?.map((item) => {
							return (
								<TableRow key={item?.id}>
									<TableCell>{item?.id}</TableCell>
									<TableCell>{item?.botTitleByPosition['1']}</TableCell>
									<TableCell>{item?.botTitleByPosition['2']}</TableCell>
									<TableCell>{item?.result[0]?.topBotWinCount}</TableCell>
									<TableCell>{item?.result[0]?.downBotWinCount}</TableCell>
									<TableCell>
										{item?.result[0]?.isDownBotWin
											? item?.botTitleByPosition['2']
											: item?.botTitleByPosition['1']}
									</TableCell>
								</TableRow>
							);
						}) || (
							<TableRow key={'1'}>
								<TableCell>1</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			)) || (
				<Flex width="100%" height="100%" align="center" justify="center">
					Тут будет Статистика
				</Flex>
			)}
		</>
	);
};
