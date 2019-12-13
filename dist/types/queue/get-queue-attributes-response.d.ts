import { CommonResponse } from '../common-response';
export interface GetQueueAttributesResponse extends CommonResponse {
    maxMsgHeapNum: number;
    pollingWaitSeconds: number;
    visibilityTimeout: number;
    maxMsgSize: number;
    msgRetentionSeconds: number;
    createTime: number;
    lastModifyTime: number;
    activeMsgNum: number;
    inactiveMsgNum: number;
    rewindSeconds: number;
    rewindmsgNum: number;
    minMsgTime: number;
}
