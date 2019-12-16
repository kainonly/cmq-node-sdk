import { CommonOptions } from '../common-options';
export interface DeleteMessageOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
    /**
     * 上次消费返回唯一的消息句柄，用于删除消息
     */
    receiptHandle: string;
}
