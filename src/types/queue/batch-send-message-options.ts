import {CommonOptions} from "../common-options";

export interface BatchSendMessageOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
    /**
     * 消息正文
     */
    msgBody: any[];
    /**
     * 单位为秒，表示该消息发送到队列后，需要延时多久用户才可见。（该延时对一批消息有效，不支持多对多映射）
     */
    delaySeconds?: number;
}
