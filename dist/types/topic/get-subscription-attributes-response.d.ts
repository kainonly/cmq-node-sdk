import { CommonResponse } from '../common-response';
export interface GetSubscriptionAttributesResponse extends CommonResponse {
    topicOwner: string;
    msgCount: number;
    protocol: string;
    endpoint: string;
    notifyStrategy: string;
    notifyContentFormat: string;
    createTime: number;
    lastModifyTime: number;
    bindingKey: string[];
}
