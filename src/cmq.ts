import {Instance} from './types/instance';
import {Common} from './common';
import {CommonOptions} from './types/common-options';
import {CreateQueueOptions} from './types/queue/create-queue-options';
import {ListQueueOptions} from './types/queue/list-queue-options';
import {GetQueueAttributesOptions} from './types/queue/get-queue-attributes-options';
import {SetQueueAttributesOptions} from './types/queue/set-queue-attributes-options';
import {DeleteQueueOptions} from './types/queue/delete-queue-options';
import {RewindQueueOptions} from './types/queue/rewind-queue-options';
import {SendMessageOptions} from './types/queue/send-message-options';
import {BatchSendMessageOptions} from './types/queue/batch-send-message-options';
import {ReceiveMessageOptions} from './types/queue/receive-message-options';
import {BatchReceiveMessageOptions} from './types/queue/batch-receive-message-options';
import {DeleteMessageOptions} from './types/queue/delete-message-options';
import {BatchDeleteMessageOptions} from './types/queue/batch-delete-message-options';
import {CreateTopicOptions} from './types/topic/create-topic-options';
import {SetTopicAttributesOptions} from './types/topic/set-topic-attributes-options';
import {ListTopicOptions} from './types/topic/list-topic-options';
import {GetTopicAttributesOptions} from './types/topic/get-topic-attributes-options';
import {DeleteTopicOptions} from './types/topic/delete-topic-options';
import {PublishMessageOptions} from './types/topic/publish-message-options';
import {BatchPublishMessageOptions} from './types/topic/batch-publish-message-options';
import {SubscribeOptions} from './types/topic/subscribe-options';
import {ListSubscriptionByTopicOptions} from './types/topic/list-subscription-by-topic-options';
import {SetSubscriptionAttributesOptions} from './types/topic/set-subscription-attributes-options';
import {UnsubscribeOptions} from './types/topic/unsubscribe-options';
import {GetSubscriptionAttributesOptions} from './types/topic/get-subscription-attributes-options';
import {ClearSubscriptionFilterTagsOptions} from './types/topic/clear-subscription-filter-tags-options';
import {CreateQueueResponse} from './types/queue/create-queue-response';
import {ListQueueResponse} from './types/queue/list-queue-response';
import {GetQueueAttributesResponse} from "./types/queue/get-queue-attributes-response";
import {SetQueueAttributesResponse} from "./types/queue/set-queue-attributes-response";
import {DeleteQueueResponse} from "./types/queue/delete-queue-response";
import {RewindQueueResponse} from "./types/queue/rewind-queue-response";
import {SendMessageResponse} from "./types/queue/send-message-response";
import {BatchSendMessageResponse} from "./types/queue/batch-send-message-response";
import {ReceiveMessageResponse} from "./types/queue/receive-message-response";
import {BatchReceiveMessageResponse} from "./types/queue/batch-receive-message-response";
import {DeleteMessageResponse} from "./types/queue/delete-message-response";
import {BatchDeleteMessageResponse} from "./types/queue/batch-delete-message-response";
import {CreateTopicResponse} from "./types/topic/create-topic-response";
import {SetTopicAttributesResponse} from "./types/topic/set-topic-attributes-response";
import {ListTopicResponse} from "./types/topic/list-topic-response";
import {GetTopicAttributesResponse} from "./types/topic/get-topic-attributes-response";
import {DeleteTopicResponse} from "./types/topic/delete-topic-response";
import {PublishMessageResponse} from "./types/topic/publish-message-response";
import {BatchPublishMessageResponse} from "./types/topic/batch-publish-message-response";
import {SubscribeResponse} from "./types/topic/subscribe-response";
import {ListSubscriptionByTopicResponse} from "./types/topic/list-subscription-by-topic-response";
import {SetSubscriptionAttributesResponse} from "./types/topic/set-subscription-attributes-response";
import {UnsubscribeResponse} from "./types/topic/unsubscribe-response";
import {GetSubscriptionAttributesResponse} from "./types/topic/get-subscription-attributes-response";
import {ClearSubscriptionFilterTagsResponse} from "./types/topic/clear-subscription-filter-tags-response";

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
     * @param operate
     * @constructor
     */
    function Service(action: string, type: string, operate?: (options: any) => void) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.value = function (options: CommonOptions) {
                options.Action = action;
                if (operate) operate(options);
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
        createQueue(options: CreateQueueOptions): Promise<CreateQueueResponse> {
            return;
        }

        /**
         * 获取队列列表
         * @param options
         */
        @Service('ListQueue', 'queue')
        listQueue(options: ListQueueOptions): Promise<ListQueueResponse> {
            return;
        }

        /**
         * 获取队列属性
         * @param options
         * @constructor
         */
        @Service('GetQueueAttributes', 'queue')
        getQueueAttributes(options: GetQueueAttributesOptions): Promise<GetQueueAttributesResponse> {
            return;
        }

        /**
         * 修改队列属性
         * @param options
         * @constructor
         */
        @Service('SetQueueAttributes', 'queue')
        setQueueAttributes(options: SetQueueAttributesOptions): Promise<SetQueueAttributesResponse> {
            return;
        }

        /**
         * 删除队列
         * @param options
         * @constructor
         */
        @Service('DeleteQueue', 'queue')
        deleteQueue(options: DeleteQueueOptions): Promise<DeleteQueueResponse> {
            return;
        }

        /**
         * 回溯队列
         * @param options
         * @constructor
         */
        @Service('RewindQueue', 'queue')
        rewindQueue(options: RewindQueueOptions): Promise<RewindQueueResponse> {
            return;
        }

        /**
         * 发送消息
         * @param options
         * @constructor
         */
        @Service('SendMessage', 'queue', options => {
            if (typeof options.msgBody === "object") {
                options.msgBody = JSON.stringify(options.msgBody);
            }
        })
        sendMessage(options: SendMessageOptions): Promise<SendMessageResponse> {
            return;
        }

        /**
         * 批量发送消息
         * @param options
         * @constructor
         */
        @Service('BatchSendMessage', 'queue', options => {
            if (typeof options.msgBody === "object") {
                options.msgBody = JSON.stringify(options.msgBody);
            }
        })
        batchSendMessage(options: BatchSendMessageOptions): Promise<BatchSendMessageResponse> {
            return;
        }

        /**
         * 消费消息
         * @param options
         * @constructor
         */
        @Service('ReceiveMessage', 'queue')
        receiveMessage(options: ReceiveMessageOptions): Promise<ReceiveMessageResponse> {
            return;
        }

        /**
         * 批量消费消息
         * @param options
         * @constructor
         */
        @Service('BatchReceiveMessage', 'queue')
        batchReceiveMessage(options: BatchReceiveMessageOptions): Promise<BatchReceiveMessageResponse> {
            return;
        }

        /**
         * 删除消息
         * @param options
         * @constructor
         */
        @Service('DeleteMessage', 'queue')
        deleteMessage(options: DeleteMessageOptions): Promise<DeleteMessageResponse> {
            return;
        }

        /**
         * 批量删除消息
         * @param options
         * @constructor
         */
        @Service('BatchDeleteQueue', 'queue')
        batchDeleteQueue(options: BatchDeleteMessageOptions): Promise<BatchDeleteMessageResponse> {
            return;
        }


        /**
         * 创建主题
         * @param options
         * @constructor
         */
        @Service('CreateTopic', 'topic')
        createTopic(options: CreateTopicOptions): Promise<CreateTopicResponse> {
            return;
        }

        /**
         * 修改主题属性
         * @param options
         * @constructor
         */
        @Service('SetTopicAttributes', 'topic')
        setTopicAttributes(options: SetTopicAttributesOptions): Promise<SetTopicAttributesResponse> {
            return;
        }

        /**
         * 获取主题列表
         * @param options
         * @constructor
         */
        @Service('ListTopic', 'topic')
        listTopic(options: ListTopicOptions): Promise<ListTopicResponse> {
            return;
        }

        /**
         * 获取主题属性
         * @param options
         * @constructor
         */
        @Service('GetTopicAttributes', 'topic')
        getTopicAttributes(options: GetTopicAttributesOptions): Promise<GetTopicAttributesResponse> {
            return;
        }

        /**
         * 删除主题
         * @param options
         * @constructor
         */
        @Service('DeleteTopic', 'topic')
        deleteTopic(options: DeleteTopicOptions): Promise<DeleteTopicResponse> {
            return;
        }

        /**
         * 发布消息
         * @param options
         * @constructor
         */
        @Service('PublishMessage', 'topic')
        publishMessage(options: PublishMessageOptions): Promise<PublishMessageResponse> {
            return;
        }

        /**
         * 批量发布消息
         * @param options
         * @constructor
         */
        @Service('BatchPublishMessage', 'topic')
        batchPublishMessage(options: BatchPublishMessageOptions): Promise<BatchPublishMessageResponse> {
            return;
        }

        /**
         * 创建订阅
         * @param options
         * @constructor
         */
        @Service('Subscribe', 'topic')
        subscribe(options: SubscribeOptions): Promise<SubscribeResponse> {
            return;
        }

        /**
         * 获取订阅列表
         * @param options
         * @constructor
         */
        @Service('ListSubscriptionByTopic', 'topic')
        listSubscriptionByTopic(options: ListSubscriptionByTopicOptions): Promise<ListSubscriptionByTopicResponse> {
            return;
        }

        /**
         * 修改订阅属性
         * @param options
         * @constructor
         */
        @Service('SetSubscriptionAttributes', 'topic')
        setSubscriptionAttributes(options: SetSubscriptionAttributesOptions): Promise<SetSubscriptionAttributesResponse> {
            return;
        }

        /**
         * 删除订阅
         * @param options
         * @constructor
         */
        @Service('Unsubscribe', 'topic')
        unsubscribe(options: UnsubscribeOptions): Promise<UnsubscribeResponse> {
            return;
        }

        /**
         * 获取订阅属性
         * @param options
         * @constructor
         */
        @Service('GetSubscriptionAttributes', 'topic')
        getSubscriptionAttributes(options: GetSubscriptionAttributesOptions): Promise<GetSubscriptionAttributesResponse> {
            return;
        }

        /**
         * 清空订阅标签
         * @param options
         * @constructor
         */
        @Service('ClearSubscriptionFilterTags', 'topic')
        clearSubscriptionFilterTags(options: ClearSubscriptionFilterTagsOptions): Promise<ClearSubscriptionFilterTagsResponse> {
            return;
        }
    }
}
