import { CommonOptions } from '../common-options';
export interface UnsubscribeOptions extends CommonOptions {
    topicName: string;
    subscriptionName: string;
}
