import {CommonOptions} from '../common-options';

export interface ClearSubscriptionFilterTagsOptions extends CommonOptions {
    topicName: string;
    subscriptionName: string;
}
