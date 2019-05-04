import {Instance} from "./types/instance";
import {CreateTopic} from "./queue/create-topic";

export class Topic {
    constructor(private instance: Instance) {
    }

    /**
     * 创建主题
     * @param topicName 主题名字
     * @param maxMsgSize 消息最大长度
     * @param filterType 用于指定主题的消息匹配策略
     * @constructor
     */
    CreateTopic(topicName: string, maxMsgSize?: number, filterType?: number) {
        return new CreateTopic(this.instance, {
            Action: 'CreateTopic',
            topicName,
            maxMsgSize,
            filterType
        });
    }
}
