import { Instance } from './types/instance';
import { CreateTopic } from './topic/create-topic';
import { SetTopicAttributes } from './topic/set-topic-attributes';
import { ListTopic } from './topic/list-topic';
import { GetTopicAttributes } from './topic/get-topic-attributes';
import { DeleteTopic } from './topic/delete-topic';
import { PublishMessage } from './topic/publish-message';
import { BatchPublishMessage } from './topic/batch-publish-message';
import { Subscribe } from './topic/subscribe';
import { ListSubscriptionByTopic } from './topic/list-subscription-by-topic';
import { SetSubscriptionAttributes } from './topic/set-subscription-attributes';
import { Unsubscribe } from './topic/unsubscribe';
import { GetSubscriptionAttributes } from './topic/get-subscription-attributes';
export declare class Topic {
    private instance;
    constructor(instance: Instance);
    /**
     * 创建主题
     * @param topicName 主题名字
     * @param maxMsgSize 消息最大长度
     * @param filterType 用于指定主题的消息匹配策略
     * @constructor
     */
    CreateTopic(topicName: string, maxMsgSize?: number, filterType?: number): CreateTopic;
    /**
     * 修改主题属性
     * @param topicName 主题名字
     * @param maxMsgSize 消息最大长度
     * @constructor
     */
    SetTopicAttributes(topicName: string, maxMsgSize?: number): SetTopicAttributes;
    /**
     * 获取主题列表
     * @param searchWord 用于过滤主题列表，后台用模糊匹配的方式来返回符合条件的主题列表
     * @param offset 分页时本页获取主题列表的起始位置
     * @param limit 分页时本页获取主题的个数
     * @constructor
     */
    ListTopic(searchWord?: string, offset?: number, limit?: number): ListTopic;
    /**
     * 获取主题属性
     * @param topicName 主题名字
     * @constructor
     */
    GetTopicAttributes(topicName: string): GetTopicAttributes;
    /**
     * 删除主题
     * @param topicName 主题名字
     * @constructor
     */
    DeleteTopic(topicName: string): DeleteTopic;
    /**
     * 发布消息
     * @param topicName 主题名字
     * @param msgBody 消息正文
     * @param msgTag 消息过滤标签
     * @param routingKey 表示发送消息的路由路径
     * @constructor
     */
    PublishMessage(topicName: string, msgBody: any, msgTag?: string[], routingKey?: string): PublishMessage;
    /**
     * 批量发布消息
     * @param topicName 主题名字
     * @param msgBody 消息正文
     * @param msgTag 消息过滤标签
     * @param routingKey 表示发送消息的路由路径
     * @constructor
     */
    BatchPublishMessage(topicName: string, msgBody: any, msgTag?: string[], routingKey?: string): BatchPublishMessage;
    /**
     * 创建订阅
     * @param topicName 主题名字
     * @param subscriptionName 订阅名字
     * @param protocol 订阅的协议
     * @param endpoint 接收投递消息的 endpoint
     * @param notifyStrategy 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略
     * @param notifyContentFormat 推送内容的格式
     * @param filterTag 消息标签
     * @param bindingKey 订阅接收消息的过滤策略
     * @constructor
     */
    Subscribe(topicName: string, subscriptionName: string, protocol: string, endpoint: string, notifyStrategy?: string, notifyContentFormat?: string, filterTag?: string[], bindingKey?: string[]): Subscribe;
    /**
     * 获取订阅列表
     * @param topicName 主题名字
     * @param searchWord 用于过滤订阅列表
     * @param offset 分页时本页获取订阅列表的起始位置
     * @param limit 分页时本页获取订阅的个数
     * @constructor
     */
    ListSubscriptionByTopic(topicName: string, searchWord?: string, offset?: number, limit?: number): ListSubscriptionByTopic;
    /**
     * 修改订阅属性
     * @param topicName 主题名字
     * @param subscriptionName 订阅名字
     * @param notifyStrategy 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略
     * @param notifyContentFormat 推送内容的格式
     * @param filterTag 消息标签
     * @param bindingKey 订阅接收消息的过滤策略
     * @constructor
     */
    SetSubscriptionAttributes(topicName: string, subscriptionName: string, notifyStrategy?: string, notifyContentFormat?: string, filterTag?: string[], bindingKey?: string[]): SetSubscriptionAttributes;
    /**
     * 删除订阅
     * @param topicName 主题名字
     * @param subscriptionName 订阅名字
     * @constructor
     */
    Unsubscribe(topicName: string, subscriptionName: string): Unsubscribe;
    /**
     * 获取订阅属性
     * @param topicName 主题名字
     * @param subscriptionName 订阅名字
     * @constructor
     */
    GetSubscriptionAttributes(topicName: string, subscriptionName: string): GetSubscriptionAttributes;
    /**
     * 清空订阅标签
     * @param topicName 主题名字
     * @param subscriptionName 订阅名字
     * @constructor
     */
    ClearSubscriptionFilterTags(topicName: string, subscriptionName: string): GetSubscriptionAttributes;
}