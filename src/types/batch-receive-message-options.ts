import {CommonOptions} from "./common-options";

export interface BatchReceiveMessageOptions extends CommonOptions {
    queueName: string;
    numOfMsg: number;
    pollingWaitSeconds?: number;
}
