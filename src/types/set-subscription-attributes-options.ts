import {CommonOptions} from './common-options';

export interface SetSubscriptionAttributesOptions extends CommonOptions {
    topicName: string;
    subscriptionName: string;
    notifyStrategy?: string;
    notifyContentFormat?: string;
    filterTag?: string[];
    bindingKey?: string[];
}
