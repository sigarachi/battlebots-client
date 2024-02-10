export enum TokenType {
	'DEV',
	'PROD',
}

export interface Token {
	id: string;
	userId: number;
	title: string;
	type: TokenType;
	blocked: boolean;
}

export type TokenResponse = Array<Token>;

export interface CreateTokenArgs {
	title: string;
	typeToken: TokenType;
}
