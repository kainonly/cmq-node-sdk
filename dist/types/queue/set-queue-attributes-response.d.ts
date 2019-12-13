import { CommonResponse } from '../common-response';
export interface SetQueueAttributesResponse extends CommonResponse {
    maxMsgHeapNum: number;
    pollingWaitSeconds: number;
    visibilityTimeout: number;
    maxMsgSize: number;
    msgRetentionSeconds: number;
    rewindSeconds: number;
}
