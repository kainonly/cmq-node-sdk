import {CommonOptions} from './common-options';

export interface PublishMessageOptions extends CommonOptions {
    topicName: string;
    msgBody: any;
    msgTag?: string[];
    routingKey?: string;
}
