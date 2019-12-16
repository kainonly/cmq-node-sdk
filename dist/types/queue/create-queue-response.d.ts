import { CommonResponse } from '../common-response';
export interface CreateQueueResponse extends CommonResponse {
    /**
     * 队列的唯一标识 ID
     */
    queueId: string;
}
