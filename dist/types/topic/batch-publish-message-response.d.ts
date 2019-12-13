import { CommonResponse } from '../common-response';
export interface BatchPublishMessageResponse extends CommonResponse {
    msgList: {
        msgId: string;
    }[];
}
