import { CommonResponse } from '../common-response';
export interface ListQueueResponse extends CommonResponse {
    totalCount: number;
    queueList: {
        queueId: string;
        queueName: string;
    }[];
}
