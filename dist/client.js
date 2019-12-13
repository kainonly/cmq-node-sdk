"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class Client {
    constructor(instance) {
        this.instance = instance;
    }
    queueRequestSend(options) {
        return new common_1.Common(this.instance, options, 'queue').send();
    }
    topicRequestSend(options) {
        return new common_1.Common(this.instance, options, 'topic').send();
    }
    createQueue(options) {
        options.Action = 'CreateQueue';
        return this.queueRequestSend(options);
    }
    listQueue(options) {
        options.Action = 'ListQueue';
        return this.queueRequestSend(options);
    }
    getQueueAttributes(options) {
        options.Action = 'GetQueueAttributes';
        return this.queueRequestSend(options);
    }
    setQueueAttributes(options) {
        options.Action = 'SetQueueAttributes';
        return this.queueRequestSend(options);
    }
    deleteQueue(options) {
        options.Action = 'DeleteQueue';
        return this.queueRequestSend(options);
    }
    rewindQueue(options) {
        options.Action = 'RewindQueue';
        return this.queueRequestSend(options);
    }
    sendMessage(options) {
        options.Action = 'SendMessage';
        return this.queueRequestSend(options);
    }
    batchSendMessage(options) {
        options.Action = 'BatchSendMessage';
        return this.queueRequestSend(options);
    }
    receiveMessage(options) {
        options.Action = 'ReceiveMessage';
        return this.queueRequestSend(options);
    }
    batchReceiveMessage(options) {
        options.Action = 'BatchReceiveMessage';
        return this.queueRequestSend(options);
    }
    deleteMessage(options) {
        options.Action = 'DeleteMessage';
        return this.queueRequestSend(options);
    }
    batchDeleteMessage(options) {
        options.Action = 'BatchDeleteMessage';
        return this.queueRequestSend(options);
    }
    createTopic(options) {
        options.Action = 'CreateTopic';
        return this.topicRequestSend(options);
    }
    setTopicAttributes(options) {
        options.Action = 'SetTopicAttributes';
        return this.topicRequestSend(options);
    }
    listTopic(options) {
        options.Action = 'ListTopic';
        return this.topicRequestSend(options);
    }
    getTopicAttributes(options) {
        options.Action = 'GetTopicAttributes';
        return this.topicRequestSend(options);
    }
    deleteTopic(options) {
        options.Action = 'DeleteTopic';
        return this.topicRequestSend(options);
    }
    publishMessage(options) {
        options.Action = 'PublishMessage';
        return this.topicRequestSend(options);
    }
    batchPublishMessage(options) {
        options.Action = 'BatchPublishMessage';
        return this.topicRequestSend(options);
    }
    subscribe(options) {
        options.Action = 'Subscribe';
        return this.topicRequestSend(options);
    }
    listSubscriptionByTopic(options) {
        options.Action = 'ListSubscriptionByTopic';
        return this.topicRequestSend(options);
    }
    setSubscriptionAttributes(options) {
        options.Action = 'SetSubscriptionAttributes';
        return this.topicRequestSend(options);
    }
    unsubscribe(options) {
        options.Action = 'Unsubscribe';
        return this.topicRequestSend(options);
    }
    getSubscriptionAttributes(options) {
        options.Action = 'GetSubscriptionAttributes';
        return this.topicRequestSend(options);
    }
    clearSubscriptionFilterTags(options) {
        options.Action = 'ClearSubscriptionFilterTags';
        return this.topicRequestSend(options);
    }
}
exports.Client = Client;
