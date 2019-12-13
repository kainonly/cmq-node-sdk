import { CommonResponse } from '../common-response';
export interface ReceiveMessageResponse extends CommonResponse {
    msgBody: string;
    msgId: string;
    receiptHandle: string;
    enqueueTime: number;
    firstDequeueTime: number;
    nextVisibleTime: number;
    dequeueCount: number;
}
