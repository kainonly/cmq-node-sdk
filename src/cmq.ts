import {Instance} from './types/instance';
import {Common} from './common';
import {CommonOptions} from './types/common-options';
import {CreateQueueOptions} from './types/create-queue-options';
import {ListQueueOptions} from './types/list-queue-options';
import {GetQueueAttributesOptions} from './types/get-queue-attributes-options';
import {SetQueueAttributesOptions} from './types/set-queue-attributes-options';
import {DeleteQueueOptions} from './types/delete-queue-options';
import {RewindQueueOptions} from './types/rewind-queue-options';
import {SendMessageOptions} from './types/send-message-options';
import {BatchSendMessageOptions} from './types/batch-send-message-options';
import {ReceiveMessageOptions} from './types/receive-message-options';
import {BatchReceiveMessageOptions} from './types/batch-receive-message-options';
import {DeleteMessageOptions} from './types/delete-message-options';
import {BatchDeleteMessageOptions} from './types/batch-delete-message-options';
import {CreateTopicOptions} from './types/create-topic-options';
import {SetTopicAttributesOptions} from './types/set-topic-attributes-options';
import {ListTopicOptions} from './types/list-topic-options';
import {GetTopicAttributesOptions} from './types/get-topic-attributes-options';
import {DeleteTopicOptions} from './types/delete-topic-options';
import {PublishMessageOptions} from './types/publish-message-options';
import {BatchPublishMessageOptions} from './types/batch-publish-message-options';
import {SubscribeOptions} from './types/subscribe-options';
import {ListSubscriptionByTopicOptions} from './types/list-subscription-by-topic-options';
import {SetSubscriptionAttributesOptions} from './types/set-subscription-attributes-options';
import {UnsubscribeOptions} from './types/unsubscribe-options';
import {GetSubscriptionAttributesOptions} from './types/get-subscription-attributes-options';
import {ClearSubscriptionFilterTagsOptions} from './types/clear-subscription-filter-tags-options';

export namespace CMQ {
    /**
     * 配置客户端
     * @param instance 实例配置
     * @constructor
     */
    export function NEW(instance: Instance) {
        return new Client(instance);
    }

    /**
     * 定义请求服务
     * @param action 执行名称
     * @param type 类型
     * @constructor
     */
    function Service(action: string, type: string) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.value = function (options: CommonOptions) {
                options.Action = action;
                return new Common(this.instance, options, type).result();
            }
        };
    }

    /**
     * CMQ客户端
     */
    class Client {
        constructor(private instance: Instance) {
        }

        /**
         * 创建队列
         * @param options
         */
        @Service('CreateQueue', 'queue')
        createQueue(options: CreateQueueOptions): Promise<any> {
            return;
        }

        /**
         * 获取队列列表
         * @param options
         */
        @Service('ListQueue', 'queue')
        listQueue(options: ListQueueOptions): Promise<any> {
            return;
        }

        /**
         * 获取队列属性
         * @param options
         * @constructor
         */
        @Service('GetQueueAttributes', 'queue')
        getQueueAttributes(options: GetQueueAttributesOptions): Promise<any> {
            return;
        }

        /**
         * 修改队列属性
         * @param options
         * @constructor
         */
        @Service('SetQueueAttributes', 'queue')
        setQueueAttributes(options: SetQueueAttributesOptions): Promise<any> {
            return;
        }

        /**
         * 删除队列
         * @param options
         * @constructor
         */
        @Service('DeleteQueue', 'queue')
        deleteQueue(options: DeleteQueueOptions): Promise<any> {
            return;
        }

        /**
         * 回溯队列
         * @param options
         * @constructor
         */
        @Service('RewindQueue', 'queue')
        rewindQueue(options: RewindQueueOptions): Promise<any> {
            return;
        }

        /**
         * 发送消息
         * @param options
         * @constructor
         */
        @Service('SendMessage', 'queue')
        sendMessage(options: SendMessageOptions): Promise<any> {
            return;
        }

        /**
         * 批量发送消息
         * @param options
         * @constructor
         */
        @Service('BatchSendMessage', 'queue')
        batchSendMessage(options: BatchSendMessageOptions): Promise<any> {
            return;
        }

        /**
         * 消费消息
         * @param options
         * @constructor
         */
        @Service('ReceiveMessage', 'queue')
        receiveMessage(options: ReceiveMessageOptions): Promise<any> {
            return;
        }

        /**
         * 批量消费消息
         * @param options
         * @constructor
         */
        @Service('BatchReceiveMessage', 'queue')
        batchReceiveMessage(options: BatchReceiveMessageOptions): Promise<any> {
            return;
        }

        /**
         * 删除消息
         * @param options
         * @constructor
         */
        @Service('DeleteMessage', 'queue')
        deleteMessage(options: DeleteMessageOptions): Promise<any> {
            return;
        }

        /**
         * 批量删除消息
         * @param options
         * @constructor
         */
        @Service('BatchDeleteQueue', 'queue')
        batchDeleteQueue(options: BatchDeleteMessageOptions): Promise<any> {
            return;
        }


        /**
         * 创建主题
         * @param options
         * @constructor
         */
        @Service('CreateTopic', 'topic')
        createTopic(options: CreateTopicOptions): Promise<any> {
            return;
        }

        /**
         * 修改主题属性
         * @param options
         * @constructor
         */
        @Service('SetTopicAttributes', 'topic')
        setTopicAttributes(options: SetTopicAttributesOptions): Promise<any> {
            return;
        }

        /**
         * 获取主题列表
         * @param options
         * @constructor
         */
        @Service('ListTopic', 'topic')
        listTopic(options: ListTopicOptions): Promise<any> {
            return;
        }

        /**
         * 获取主题属性
         * @param options
         * @constructor
         */
        @Service('GetTopicAttributes', 'topic')
        getTopicAttributes(options: GetTopicAttributesOptions): Promise<any> {
            return;
        }

        /**
         * 删除主题
         * @param options
         * @constructor
         */
        @Service('DeleteTopic', 'topic')
        deleteTopic(options: DeleteTopicOptions): Promise<any> {
            return;
        }

        /**
         * 发布消息
         * @param options
         * @constructor
         */
        @Service('PublishMessage', 'topic')
        publishMessage(options: PublishMessageOptions): Promise<any> {
            return;
        }

        /**
         * 批量发布消息
         * @param options
         * @constructor
         */
        @Service('BatchPublishMessage', 'topic')
        batchPublishMessage(options: BatchPublishMessageOptions): Promise<any> {
            return;
        }

        /**
         * 创建订阅
         * @param options
         * @constructor
         */
        @Service('Subscribe', 'topic')
        subscribe(options: SubscribeOptions): Promise<any> {
            return;
        }

        /**
         * 获取订阅列表
         * @param options
         * @constructor
         */
        @Service('ListSubscriptionByTopic', 'topic')
        listSubscriptionByTopic(options: ListSubscriptionByTopicOptions): Promise<any> {
            return;
        }

        /**
         * 修改订阅属性
         * @param options
         * @constructor
         */
        @Service('SetSubscriptionAttributes', 'topic')
        setSubscriptionAttributes(options: SetSubscriptionAttributesOptions): Promise<any> {
            return;
        }

        /**
         * 删除订阅
         * @param options
         * @constructor
         */
        @Service('Unsubscribe', 'topic')
        unsubscribe(options: UnsubscribeOptions): Promise<any> {
            return;
        }

        /**
         * 获取订阅属性
         * @param options
         * @constructor
         */
        @Service('GetSubscriptionAttributes', 'topic')
        getSubscriptionAttributes(options: GetSubscriptionAttributesOptions): Promise<any> {
            return;
        }

        /**
         * 清空订阅标签
         * @param options
         * @constructor
         */
        @Service('ClearSubscriptionFilterTags', 'topic')
        clearSubscriptionFilterTags(options: ClearSubscriptionFilterTagsOptions): Promise<any> {
            return;
        }
    }
}
