"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const common_1 = require("./common");
/**
 * 客户端类
 */
class Client {
    /**
     * 客户端初始化
     * @param instance
     */
    constructor(instance) {
        this.instance = instance;
    }
    /**
     * 队列类型统一发送
     * @param options
     */
    queueRequestSend(options) {
        return new common_1.Common(this.instance, options, 'queue').send();
    }
    /**
     * 主题类型统一发送
     * @param options
     */
    topicRequestSend(options) {
        return new common_1.Common(this.instance, options, 'topic').send();
    }
    /**
     * 创建队列
     * @param options
     */
    createQueue(options) {
        options.Action = 'CreateQueue';
        return this.queueRequestSend(options);
    }
    /**
     * 获取队列列表
     * @param options
     */
    listQueue(options) {
        options.Action = 'ListQueue';
        return this.queueRequestSend(options);
    }
    /**
     * 获取队列属性
     * @param options
     */
    getQueueAttributes(options) {
        options.Action = 'GetQueueAttributes';
        return this.queueRequestSend(options);
    }
    /**
     * 修改队列属性
     * @param options
     */
    setQueueAttributes(options) {
        options.Action = 'SetQueueAttributes';
        return this.queueRequestSend(options);
    }
    /**
     * 删除队列
     * @param options
     */
    deleteQueue(options) {
        options.Action = 'DeleteQueue';
        return this.queueRequestSend(options);
    }
    /**
     * 回溯队列
     * @param options
     */
    rewindQueue(options) {
        options.Action = 'RewindQueue';
        return this.queueRequestSend(options);
    }
    /**
     * 发送消息
     * @param options
     */
    sendMessage(options) {
        options.Action = 'SendMessage';
        return this.queueRequestSend(options);
    }
    /**
     * 批量发送消息
     * @param options
     */
    batchSendMessage(options) {
        options.Action = 'BatchSendMessage';
        return this.queueRequestSend(options);
    }
    /**
     * 消费消息
     * @param options
     */
    receiveMessage(options) {
        options.Action = 'ReceiveMessage';
        return this.queueRequestSend(options);
    }
    /**
     * 批量消费消息
     * @param options
     */
    batchReceiveMessage(options) {
        options.Action = 'BatchReceiveMessage';
        return this.queueRequestSend(options);
    }
    /**
     * 删除消息
     * @param options
     */
    deleteMessage(options) {
        options.Action = 'DeleteMessage';
        return this.queueRequestSend(options);
    }
    /**
     * 批量删除消息
     * @param options
     */
    batchDeleteMessage(options) {
        options.Action = 'BatchDeleteMessage';
        return this.queueRequestSend(options);
    }
    /**
     * 创建主题
     * @param options
     */
    createTopic(options) {
        options.Action = 'CreateTopic';
        return this.topicRequestSend(options);
    }
    /**
     * 修改主题属性
     * @param options
     */
    setTopicAttributes(options) {
        options.Action = 'SetTopicAttributes';
        return this.topicRequestSend(options);
    }
    /**
     * 获取主题列表
     * @param options
     */
    listTopic(options) {
        options.Action = 'ListTopic';
        return this.topicRequestSend(options);
    }
    /**
     * 获取主题属性
     * @param options
     */
    getTopicAttributes(options) {
        options.Action = 'GetTopicAttributes';
        return this.topicRequestSend(options);
    }
    /**
     * 删除主题
     * @param options
     */
    deleteTopic(options) {
        options.Action = 'DeleteTopic';
        return this.topicRequestSend(options);
    }
    /**
     * 发布消息
     * @param options
     */
    publishMessage(options) {
        options.Action = 'PublishMessage';
        return this.topicRequestSend(options);
    }
    /**
     * 批量发布消息
     * @param options
     */
    batchPublishMessage(options) {
        options.Action = 'BatchPublishMessage';
        return this.topicRequestSend(options);
    }
    /**
     * 创建订阅
     * @param options
     */
    subscribe(options) {
        options.Action = 'Subscribe';
        return this.topicRequestSend(options);
    }
    /**
     * 获取订阅列表
     * @param options
     */
    listSubscriptionByTopic(options) {
        options.Action = 'ListSubscriptionByTopic';
        return this.topicRequestSend(options);
    }
    /**
     * 修改订阅属性
     * @param options
     */
    setSubscriptionAttributes(options) {
        options.Action = 'SetSubscriptionAttributes';
        return this.topicRequestSend(options);
    }
    /**
     * 删除订阅
     * @param options
     */
    unsubscribe(options) {
        options.Action = 'Unsubscribe';
        return this.topicRequestSend(options);
    }
    /**
     * 获取订阅属性
     * @param options
     */
    getSubscriptionAttributes(options) {
        options.Action = 'GetSubscriptionAttributes';
        return this.topicRequestSend(options);
    }
    /**
     * 清空订阅标签
     * @param options
     */
    clearSubscriptionFilterTags(options) {
        options.Action = 'ClearSubscriptionFilterTags';
        return this.topicRequestSend(options);
    }
}
exports.Client = Client;
