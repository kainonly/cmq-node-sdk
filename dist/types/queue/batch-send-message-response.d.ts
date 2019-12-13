import { CommonResponse } from '../common-response';
export interface BatchSendMessageResponse extends CommonResponse {
    msgList: {
        msgId: string;
    }[];
}
