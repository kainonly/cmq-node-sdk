import { CommonOptions } from '../common-options';
export interface DeleteMessageOptions extends CommonOptions {
    queueName: string;
    receiptHandle: string;
}
