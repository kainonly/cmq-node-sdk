import {CommonResponse} from "../common-response";

export interface GetSubscriptionAttributesResponse extends CommonResponse {
    /**
     * 订阅拥有者的 APPID
     */
    topicOwner: string;
    /**
     * 该订阅待投递的消息数
     */
    msgCount: number;
    /**
     * 订阅的协议，目前支持两种协议：HTTP、queue
     */
    protocol: string;
    /**
     * 接收通知的 endpoint
     */
    endpoint: string;
    /**
     * 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略
     */
    notifyStrategy: string;
    /**
     * 推送内容的格式
     */
    notifyContentFormat: string;
    /**
     * 订阅的创建时间
     */
    createTime: number;
    /**
     * 最后一次修改订阅属性的时间
     */
    lastModifyTime: number;
    /**
     * 表示订阅接收消息的过滤策略
     */
    bindingKey: string[];
}
