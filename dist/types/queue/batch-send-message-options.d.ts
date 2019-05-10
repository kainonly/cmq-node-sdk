import { CommonOptions } from "../common-options";
export interface BatchSendMessageOptions extends CommonOptions {
    queueName: string;
    msgBody: any[];
    delaySeconds: number;
}
