export interface CommonResponse {
    code: number;
    message: string;
    requestId: string;
    [key: string]: any;
}
