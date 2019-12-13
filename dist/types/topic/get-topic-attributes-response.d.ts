import { CommonResponse } from '../common-response';
export interface GetTopicAttributesResponse extends CommonResponse {
    msgCount: number;
    maxMsgSize: number;
    msgRetentionSeconds: number;
    createTime: number;
    lastModifyTime: number;
    filterType: number;
}
