import { CommonOptions } from './common-options';
export interface BatchPublishMessageOptions extends CommonOptions {
    topicName: string;
    msgBody: any;
    msgTag?: string[];
    routingKey?: string;
}
