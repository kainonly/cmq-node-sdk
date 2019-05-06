import {Instance} from "./types/instance";
import {CreateTopic} from "./topic/create-topic";
import {SetTopicAttributes} from "./topic/set-topic-attributes";
import {ListTopic} from "./topic/list-topic";

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

    /**
     * 修改主题属性
     * @param topicName 主题名字
     * @param maxMsgSize 消息最大长度
     * @constructor
     */
    SetTopicAttributes(topicName: string, maxMsgSize?: number) {
        return new SetTopicAttributes(this.instance, {
            Action: 'SetTopicAttributes',
            topicName,
            maxMsgSize
        });
    }

    /**
     * 获取主题列表
     * @param searchWord
     * @param offset
     * @param limit
     * @constructor
     */
    ListTopic(searchWord?: string, offset?: number, limit?: number) {
        return new ListTopic(this.instance, {
            Action: 'ListTopic',
            searchWord,
            offset,
            limit
        });
    }
}
