import {CommonOptions} from '../common-options';

export interface SubscribeOptions extends CommonOptions {
    topicName: string;
    subscriptionName: string;
    protocol: string;
    endpoint: string;
    notifyStrategy?: string;
    notifyContentFormat?: string;
    filterTag?: string[];
    bindingKey?: string[];
}
