export interface BotInfo {
	title: string;
	position: number;
	isActive: boolean;
}

export interface RoundInfo {
	downBotPosition: number;
	topBotPosition: number;
	downBotWinCount: number;
	topBotWinCount: number;
	drawCount: number;
	leftCount: number;
	isPlay: boolean;
	isDownBotWin: boolean;
}

export interface GetCurrentStatResponse {
	id: number;
	bots: Array<BotInfo>;
	roundInfo: Array<RoundInfo>;
}

export type BotPlacement = {
	[key: string]: string;
};

export interface StatInfo {
	id: string;
	botTitleByPosition: BotPlacement;
	result: Array<RoundInfo>;
}

export type GetStatResponse = Array<StatInfo>;
