import {CommonOptions} from "../common-options";

export interface ReceiveMessageOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
    /**
     * 本次请求的长轮询等待时间
     */
    pollingWaitSeconds?: number;
}
