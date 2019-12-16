import { CommonOptions } from '../common-options';
export interface BatchReceiveMessageOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
    /**
     * 本次消费的消息数量
     */
    numOfMsg: number;
    /**
     * 本次请求的长轮询等待时间
     */
    pollingWaitSeconds?: number;
}
