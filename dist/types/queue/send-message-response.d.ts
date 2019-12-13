import { CommonResponse } from '../common-response';
export interface SendMessageResponse extends CommonResponse {
    msgId: string;
}
