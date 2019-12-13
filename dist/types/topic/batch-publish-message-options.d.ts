import { CommonOptions } from '../common-options';
export interface BatchPublishMessageOptions extends CommonOptions {
    topicName: string;
    msgBody: string[];
    msgTag?: string[];
    routingKey?: string;
}
