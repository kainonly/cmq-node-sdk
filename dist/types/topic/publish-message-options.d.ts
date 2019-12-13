import { CommonOptions } from '../common-options';
export interface PublishMessageOptions extends CommonOptions {
    topicName: string;
    msgBody: string;
    msgTag?: string[];
    routingKey?: string;
}
