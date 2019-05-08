import {Instance} from "./types/instance";
import {CreateTopic} from "./topic/create-topic";
import {SetTopicAttributes} from "./topic/set-topic-attributes";
import {ListTopic} from "./topic/list-topic";
import {GetTopicAttributes} from "./topic/get-topic-attributes";

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
     * @param searchWord 用于过滤主题列表，后台用模糊匹配的方式来返回符合条件的主题列表
     * @param offset 分页时本页获取主题列表的起始位置
     * @param limit 分页时本页获取主题的个数
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

    /**
     * 获取主题属性
     * @param topicName 主题名字
     * @constructor
     */
    GetTopicAttributes(topicName: string) {
        return new GetTopicAttributes(this.instance, {
            Action: 'GetTopicAttributes',
            topicName
        });
    }
}
