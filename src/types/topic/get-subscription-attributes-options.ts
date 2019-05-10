import {CommonOptions} from '../common-options';

export interface GetSubscriptionAttributesOptions extends CommonOptions {
    topicName: string;
    subscriptionName: string;
}
