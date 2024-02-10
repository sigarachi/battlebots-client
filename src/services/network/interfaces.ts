export interface CommonResponse<T> {
	statusCode: number;
	statusMessage: string;
	data?: T;
}
