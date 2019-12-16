import { CommonOptions } from '../common-options';
export interface CreateQueueOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
    /**
     * 最大堆积消息数
     */
    maxMsgHeapNum?: number;
    /**
     * 消息接收长轮询等待时间
     */
    pollingWaitSeconds?: number;
    /**
     * 消息可见性超时
     */
    visibilityTimeout?: number;
    /**
     * 消息最大长度
     */
    maxMsgSize?: number;
    /**
     * 消息保留周期
     */
    msgRetentionSeconds?: number;
    /**
     * 队列是否开启回溯消息能力，该参数取值范围 0-msgRetentionSeconds，即最大的回溯时间为消息在队列中的保留周期，0表示不开启。
     */
    rewindSeconds?: number;
}
