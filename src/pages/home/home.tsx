import { Flex } from '@components/flex';
import { CircularProgress, User } from '@nextui-org/react';
import { useGetCurrentStatQuery } from '@store/api/statistic/statistic-slice';
import React from 'react';

export const Home = (): React.ReactElement => {
	const { data, isLoading, isError } = useGetCurrentStatQuery();

	if (isLoading) {
		return <CircularProgress aria-label="Loading..." />;
	}

	if (isError) {
		return <>Статистика не загрузилась :(</>;
	}

	return (
		<Flex width="100%" align="center" direction="column">
			<p>Текущий раунд</p>
			<p>ID: {data?.data?.id}</p>
			<p>Сыграно раундов: {data?.data?.roundInfo.length}</p>
			<Flex gap="24px" pd="10px 0">
				<User
					name={data?.data?.bots[0].title}
					description={`Позиция: ${data?.data?.bots[0].position}`}
				/>
				<Flex gap="5px">
					{data?.data?.roundInfo.map((item, index) => (
						<Flex direction="column" align="center">
							<p className="text-xs">Раунд: {index + 1}</p>
							<p className="text-xs">
								Статус: {item.isPlay ? 'В процессе' : 'Завершен'}
							</p>
							<p className="text-xs">
								Побед {data?.data?.bots[0].title}: {item.topBotWinCount}
							</p>
							<p className="text-xs">
								Побед {data?.data?.bots[1].title}: {item.downBotWinCount}
							</p>
						</Flex>
					))}
				</Flex>
				<User
					name={data?.data?.bots[1].title}
					description={`Позиция: ${data?.data?.bots[1].position}`}
				/>
			</Flex>
		</Flex>
	);
};
