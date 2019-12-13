import { CommonResponse } from '../common-response';
export interface CreateQueueResponse extends CommonResponse {
    queueId: string;
}
