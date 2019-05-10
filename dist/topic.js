"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_topic_1 = require("./topic/create-topic");
const set_topic_attributes_1 = require("./topic/set-topic-attributes");
const list_topic_1 = require("./topic/list-topic");
const get_topic_attributes_1 = require("./topic/get-topic-attributes");
const delete_topic_1 = require("./topic/delete-topic");
const publish_message_1 = require("./topic/publish-message");
const batch_publish_message_1 = require("./topic/batch-publish-message");
const subscribe_1 = require("./topic/subscribe");
const list_subscription_by_topic_1 = require("./topic/list-subscription-by-topic");
const set_subscription_attributes_1 = require("./topic/set-subscription-attributes");
const unsubscribe_1 = require("./topic/unsubscribe");
const get_subscription_attributes_1 = require("./topic/get-subscription-attributes");
class Topic {
    constructor(instance) {
        this.instance = instance;
    }
    /**
     * 创建主题
     * @param topicName 主题名字
     * @param maxMsgSize 消息最大长度
     * @param filterType 用于指定主题的消息匹配策略
     * @constructor
     */
    CreateTopic(topicName, maxMsgSize, filterType) {
        return new create_topic_1.CreateTopic(this.instance, {
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
    SetTopicAttributes(topicName, maxMsgSize) {
        return new set_topic_attributes_1.SetTopicAttributes(this.instance, {
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
    ListTopic(searchWord, offset, limit) {
        return new list_topic_1.ListTopic(this.instance, {
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
    GetTopicAttributes(topicName) {
        return new get_topic_attributes_1.GetTopicAttributes(this.instance, {
            Action: 'GetTopicAttributes',
            topicName
        });
    }
    /**
     * 删除主题
     * @param topicName 主题名字
     * @constructor
     */
    DeleteTopic(topicName) {
        return new delete_topic_1.DeleteTopic(this.instance, {
            Action: 'DeleteTopic',
            topicName
        });
    }
    /**
     * 发布消息
     * @param topicName 主题名字
     * @param msgBody 消息正文
     * @param msgTag 消息过滤标签
     * @param routingKey 表示发送消息的路由路径
     * @constructor
     */
    PublishMessage(topicName, msgBody, msgTag, routingKey) {
        return new publish_message_1.PublishMessage(this.instance, {
            Action: 'PublishMessage',
            topicName,
            msgBody,
            msgTag,
            routingKey
        });
    }
    /**
     * 批量发布消息
     * @param topicName 主题名字
     * @param msgBody 消息正文
     * @param msgTag 消息过滤标签
     * @param routingKey 表示发送消息的路由路径
     * @constructor
     */
    BatchPublishMessage(topicName, msgBody, msgTag, routingKey) {
        return new batch_publish_message_1.BatchPublishMessage(this.instance, {
            Action: 'BatchPublishMessage',
            topicName,
            msgBody,
            msgTag,
            routingKey
        });
    }
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
    Subscribe(topicName, subscriptionName, protocol, endpoint, notifyStrategy, notifyContentFormat, filterTag, bindingKey) {
        return new subscribe_1.Subscribe(this.instance, {
            Action: 'Subscribe',
            topicName,
            subscriptionName,
            protocol,
            endpoint,
            notifyStrategy,
            notifyContentFormat,
            filterTag,
            bindingKey
        });
    }
    /**
     * 获取订阅列表
     * @param topicName 主题名字
     * @param searchWord 用于过滤订阅列表
     * @param offset 分页时本页获取订阅列表的起始位置
     * @param limit 分页时本页获取订阅的个数
     * @constructor
     */
    ListSubscriptionByTopic(topicName, searchWord, offset, limit) {
        return new list_subscription_by_topic_1.ListSubscriptionByTopic(this.instance, {
            Action: 'ListSubscriptionByTopic',
            topicName,
            searchWord,
            offset,
            limit,
        });
    }
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
    SetSubscriptionAttributes(topicName, subscriptionName, notifyStrategy, notifyContentFormat, filterTag, bindingKey) {
        return new set_subscription_attributes_1.SetSubscriptionAttributes(this.instance, {
            Action: 'SetSubscriptionAttributes',
            topicName,
            subscriptionName,
            notifyStrategy,
            notifyContentFormat,
            filterTag,
            bindingKey
        });
    }
    /**
     * 删除订阅
     * @param topicName 主题名字
     * @param subscriptionName 订阅名字
     * @constructor
     */
    Unsubscribe(topicName, subscriptionName) {
        return new unsubscribe_1.Unsubscribe(this.instance, {
            Action: 'Unsubscribe',
            topicName,
            subscriptionName
        });
    }
    /**
     * 获取订阅属性
     * @param topicName 主题名字
     * @param subscriptionName 订阅名字
     * @constructor
     */
    GetSubscriptionAttributes(topicName, subscriptionName) {
        return new get_subscription_attributes_1.GetSubscriptionAttributes(this.instance, {
            Action: 'GetSubscriptionAttributes',
            topicName,
            subscriptionName
        });
    }
    /**
     * 清空订阅标签
     * @param topicName 主题名字
     * @param subscriptionName 订阅名字
     * @constructor
     */
    ClearSubscriptionFilterTags(topicName, subscriptionName) {
        return new get_subscription_attributes_1.GetSubscriptionAttributes(this.instance, {
            Action: 'ClearSubscriptionFilterTags',
            topicName,
            subscriptionName
        });
    }
}
exports.Topic = Topic;
