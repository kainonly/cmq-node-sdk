import { CommonResponse } from '../common-response';
export interface ListSubscriptionByTopicResponse extends CommonResponse {
    totalCount: number;
    subscriptionList: {
        subscriptionId: string;
        subscriptionName: string;
        protocol: string;
        endpoint: string;
    }[];
}
