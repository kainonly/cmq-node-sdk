"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const util_1 = require("util");
var CMQ;
(function (CMQ) {
    /**
     * 配置客户端
     * @param instance 实例配置
     * @constructor
     */
    function NEW(instance) {
        return new Client(instance);
    }
    CMQ.NEW = NEW;
    /**
     * 定义请求服务
     * @param action 执行名称
     * @param type 类型
     * @param operate
     * @constructor
     */
    function Service(action, type, operate) {
        return function (target, propertyKey, descriptor) {
            descriptor.value = function (options) {
                options.Action = action;
                if (operate)
                    operate(options);
                return new common_1.Common(this.instance, options, type).result();
            };
        };
    }
    /**
     * CMQ客户端
     */
    class Client {
        constructor(instance) {
            this.instance = instance;
        }
        /**
         * 创建队列
         * @param options
         */
        createQueue(options) {
            return;
        }
        /**
         * 获取队列列表
         * @param options
         */
        listQueue(options) {
            return;
        }
        /**
         * 获取队列属性
         * @param options
         * @constructor
         */
        getQueueAttributes(options) {
            return;
        }
        /**
         * 修改队列属性
         * @param options
         * @constructor
         */
        setQueueAttributes(options) {
            return;
        }
        /**
         * 删除队列
         * @param options
         * @constructor
         */
        deleteQueue(options) {
            return;
        }
        /**
         * 回溯队列
         * @param options
         * @constructor
         */
        rewindQueue(options) {
            return;
        }
        /**
         * 发送消息
         * @param options
         * @constructor
         */
        sendMessage(options) {
            return;
        }
        /**
         * 批量发送消息
         * @param options
         * @constructor
         */
        batchSendMessage(options) {
            return;
        }
        /**
         * 消费消息
         * @param options
         * @constructor
         */
        receiveMessage(options) {
            return;
        }
        /**
         * 批量消费消息
         * @param options
         * @constructor
         */
        batchReceiveMessage(options) {
            return;
        }
        /**
         * 删除消息
         * @param options
         * @constructor
         */
        deleteMessage(options) {
            return;
        }
        /**
         * 批量删除消息
         * @param options
         * @constructor
         */
        batchDeleteMessage(options) {
            return;
        }
        /**
         * 创建主题
         * @param options
         * @constructor
         */
        createTopic(options) {
            return;
        }
        /**
         * 修改主题属性
         * @param options
         * @constructor
         */
        setTopicAttributes(options) {
            return;
        }
        /**
         * 获取主题列表
         * @param options
         * @constructor
         */
        listTopic(options) {
            return;
        }
        /**
         * 获取主题属性
         * @param options
         * @constructor
         */
        getTopicAttributes(options) {
            return;
        }
        /**
         * 删除主题
         * @param options
         * @constructor
         */
        deleteTopic(options) {
            return;
        }
        /**
         * 发布消息
         * @param options
         * @constructor
         */
        publishMessage(options) {
            return;
        }
        /**
         * 批量发布消息
         * @param options
         * @constructor
         */
        batchPublishMessage(options) {
            return;
        }
        /**
         * 创建订阅
         * @param options
         * @constructor
         */
        subscribe(options) {
            return;
        }
        /**
         * 获取订阅列表
         * @param options
         * @constructor
         */
        listSubscriptionByTopic(options) {
            return;
        }
        /**
         * 修改订阅属性
         * @param options
         * @constructor
         */
        setSubscriptionAttributes(options) {
            return;
        }
        /**
         * 删除订阅
         * @param options
         * @constructor
         */
        unsubscribe(options) {
            return;
        }
        /**
         * 获取订阅属性
         * @param options
         * @constructor
         */
        getSubscriptionAttributes(options) {
            return;
        }
        /**
         * 清空订阅标签
         * @param options
         * @constructor
         */
        clearSubscriptionFilterTags(options) {
            return;
        }
    }
    __decorate([
        Service('CreateQueue', 'queue')
    ], Client.prototype, "createQueue", null);
    __decorate([
        Service('ListQueue', 'queue')
    ], Client.prototype, "listQueue", null);
    __decorate([
        Service('GetQueueAttributes', 'queue')
    ], Client.prototype, "getQueueAttributes", null);
    __decorate([
        Service('SetQueueAttributes', 'queue')
    ], Client.prototype, "setQueueAttributes", null);
    __decorate([
        Service('DeleteQueue', 'queue')
    ], Client.prototype, "deleteQueue", null);
    __decorate([
        Service('RewindQueue', 'queue')
    ], Client.prototype, "rewindQueue", null);
    __decorate([
        Service('SendMessage', 'queue', options => {
            if (util_1.isObject(options.msgBody)) {
                options.msgBody = JSON.stringify(options.msgBody);
            }
        })
    ], Client.prototype, "sendMessage", null);
    __decorate([
        Service('BatchSendMessage', 'queue', options => {
            options.msgBody = options.msgBody.map((v) => util_1.isObject(v) ? JSON.stringify(v) : v);
        })
    ], Client.prototype, "batchSendMessage", null);
    __decorate([
        Service('ReceiveMessage', 'queue')
    ], Client.prototype, "receiveMessage", null);
    __decorate([
        Service('BatchReceiveMessage', 'queue')
    ], Client.prototype, "batchReceiveMessage", null);
    __decorate([
        Service('DeleteMessage', 'queue')
    ], Client.prototype, "deleteMessage", null);
    __decorate([
        Service('BatchDeleteMessage', 'queue')
    ], Client.prototype, "batchDeleteMessage", null);
    __decorate([
        Service('CreateTopic', 'topic')
    ], Client.prototype, "createTopic", null);
    __decorate([
        Service('SetTopicAttributes', 'topic')
    ], Client.prototype, "setTopicAttributes", null);
    __decorate([
        Service('ListTopic', 'topic')
    ], Client.prototype, "listTopic", null);
    __decorate([
        Service('GetTopicAttributes', 'topic')
    ], Client.prototype, "getTopicAttributes", null);
    __decorate([
        Service('DeleteTopic', 'topic')
    ], Client.prototype, "deleteTopic", null);
    __decorate([
        Service('PublishMessage', 'topic')
    ], Client.prototype, "publishMessage", null);
    __decorate([
        Service('BatchPublishMessage', 'topic')
    ], Client.prototype, "batchPublishMessage", null);
    __decorate([
        Service('Subscribe', 'topic')
    ], Client.prototype, "subscribe", null);
    __decorate([
        Service('ListSubscriptionByTopic', 'topic')
    ], Client.prototype, "listSubscriptionByTopic", null);
    __decorate([
        Service('SetSubscriptionAttributes', 'topic')
    ], Client.prototype, "setSubscriptionAttributes", null);
    __decorate([
        Service('Unsubscribe', 'topic')
    ], Client.prototype, "unsubscribe", null);
    __decorate([
        Service('GetSubscriptionAttributes', 'topic')
    ], Client.prototype, "getSubscriptionAttributes", null);
    __decorate([
        Service('ClearSubscriptionFilterTags', 'topic')
    ], Client.prototype, "clearSubscriptionFilterTags", null);
})(CMQ = exports.CMQ || (exports.CMQ = {}));
