import { CommonOptions } from "./common-options";
export interface BatchDeleteMessageOptions extends CommonOptions {
    queueName: string;
    receiptHandle: any[];
}
