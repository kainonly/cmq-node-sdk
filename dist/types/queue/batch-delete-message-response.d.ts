import { CommonResponse } from '../common-response';
export interface BatchDeleteMessageResponse extends CommonResponse {
    errorList: {
        code: number;
        message: string;
        receiptHandle: string;
    }[];
}
