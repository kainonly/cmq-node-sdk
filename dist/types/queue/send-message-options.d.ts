import { CommonOptions } from '../common-options';
export interface SendMessageOptions extends CommonOptions {
    queueName: string;
    msgBody: string;
    delaySeconds?: number;
}
