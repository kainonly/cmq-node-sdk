import {CommonOptions} from "../common-options";

export interface ReceiveMessageOptions extends CommonOptions {
    queueName: string;
    pollingWaitSeconds?: number;
}
