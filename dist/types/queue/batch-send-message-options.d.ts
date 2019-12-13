import { CommonOptions } from '../common-options';
export interface BatchSendMessageOptions extends CommonOptions {
    queueName: string;
    msgBody: string[];
    delaySeconds?: number;
}
