import { CommonOptions } from "../common-options";
export interface RewindQueueOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
    /**
     * 设定该时间，则（Batch）receiveMessage 接口，会按照生产消息的先后顺序消费该时间戳以后的消息
     */
    startConsumeTime: number;
}
