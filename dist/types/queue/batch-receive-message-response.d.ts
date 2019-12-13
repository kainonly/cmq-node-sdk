import { CommonResponse } from '../common-response';
export interface BatchReceiveMessageResponse extends CommonResponse {
    msgInfoList: {
        msgBody: string;
        msgId: string;
        receiptHandle: string;
        enqueueTime: number;
        firstDequeueTime: number;
        nextVisibleTime: number;
        dequeueCount: number;
    }[];
}
