import {CommonOptions} from "../common-options";

export interface BatchDeleteMessageOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
    /**
     * 上次消费消息时返回的消息句柄
     */
    receiptHandle: string[];
}
