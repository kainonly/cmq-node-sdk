import { CommonOptions } from '../common-options';
export interface SetSubscriptionAttributesOptions extends CommonOptions {
    /**
     * 主题名字
     */
    topicName: string;
    /**
     * 订阅名字
     */
    subscriptionName: string;
    /**
     * 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略
     */
    notifyStrategy?: string;
    /**
     * 推送内容的格式
     */
    notifyContentFormat?: string;
    /**
     * 消息正文。消息标签（用于消息过滤)
     */
    filterTag?: string[];
    /**
     * 订阅接收消息的过滤策略
     */
    bindingKey?: string[];
}
