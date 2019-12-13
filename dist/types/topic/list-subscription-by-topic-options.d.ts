import { CommonOptions } from '../common-options';
export interface ListSubscriptionByTopicOptions extends CommonOptions {
    topicName: string;
    searchWord?: string;
    offset?: number;
    limit?: number;
}
