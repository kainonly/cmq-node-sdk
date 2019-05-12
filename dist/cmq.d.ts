import { Instance } from './types/instance';
import { CreateQueueOptions } from './types/queue/create-queue-options';
import { ListQueueOptions } from './types/queue/list-queue-options';
import { GetQueueAttributesOptions } from './types/queue/get-queue-attributes-options';
import { SetQueueAttributesOptions } from './types/queue/set-queue-attributes-options';
import { DeleteQueueOptions } from './types/queue/delete-queue-options';
import { RewindQueueOptions } from './types/queue/rewind-queue-options';
import { SendMessageOptions } from './types/queue/send-message-options';
import { BatchSendMessageOptions } from './types/queue/batch-send-message-options';
import { ReceiveMessageOptions } from './types/queue/receive-message-options';
import { BatchReceiveMessageOptions } from './types/queue/batch-receive-message-options';
import { DeleteMessageOptions } from './types/queue/delete-message-options';
import { BatchDeleteMessageOptions } from './types/queue/batch-delete-message-options';
import { CreateTopicOptions } from './types/topic/create-topic-options';
import { SetTopicAttributesOptions } from './types/topic/set-topic-attributes-options';
import { ListTopicOptions } from './types/topic/list-topic-options';
import { GetTopicAttributesOptions } from './types/topic/get-topic-attributes-options';
import { DeleteTopicOptions } from './types/topic/delete-topic-options';
import { PublishMessageOptions } from './types/topic/publish-message-options';
import { BatchPublishMessageOptions } from './types/topic/batch-publish-message-options';
import { SubscribeOptions } from './types/topic/subscribe-options';
import { ListSubscriptionByTopicOptions } from './types/topic/list-subscription-by-topic-options';
import { SetSubscriptionAttributesOptions } from './types/topic/set-subscription-attributes-options';
import { UnsubscribeOptions } from './types/topic/unsubscribe-options';
import { GetSubscriptionAttributesOptions } from './types/topic/get-subscription-attributes-options';
import { ClearSubscriptionFilterTagsOptions } from './types/topic/clear-subscription-filter-tags-options';
import { CreateQueueResponse } from './types/queue/create-queue-response';
import { ListQueueResponse } from './types/queue/list-queue-response';
import { GetQueueAttributesResponse } from "./types/queue/get-queue-attributes-response";
import { SetQueueAttributesResponse } from "./types/queue/set-queue-attributes-response";
import { DeleteQueueResponse } from "./types/queue/delete-queue-response";
import { RewindQueueResponse } from "./types/queue/rewind-queue-response";
import { SendMessageResponse } from "./types/queue/send-message-response";
import { BatchSendMessageResponse } from "./types/queue/batch-send-message-response";
import { ReceiveMessageResponse } from "./types/queue/receive-message-response";
import { BatchReceiveMessageResponse } from "./types/queue/batch-receive-message-response";
import { DeleteMessageResponse } from "./types/queue/delete-message-response";
import { BatchDeleteMessageResponse } from "./types/queue/batch-delete-message-response";
import { CreateTopicResponse } from "./types/topic/create-topic-response";
import { SetTopicAttributesResponse } from "./types/topic/set-topic-attributes-response";
import { ListTopicResponse } from "./types/topic/list-topic-response";
import { GetTopicAttributesResponse } from "./types/topic/get-topic-attributes-response";
import { DeleteTopicResponse } from "./types/topic/delete-topic-response";
import { PublishMessageResponse } from "./types/topic/publish-message-response";
import { BatchPublishMessageResponse } from "./types/topic/batch-publish-message-response";
import { SubscribeResponse } from "./types/topic/subscribe-response";
import { ListSubscriptionByTopicResponse } from "./types/topic/list-subscription-by-topic-response";
import { SetSubscriptionAttributesResponse } from "./types/topic/set-subscription-attributes-response";
import { UnsubscribeResponse } from "./types/topic/unsubscribe-response";
import { GetSubscriptionAttributesResponse } from "./types/topic/get-subscription-attributes-response";
import { ClearSubscriptionFilterTagsResponse } from "./types/topic/clear-subscription-filter-tags-response";
export declare namespace CMQ {
    /**
     * 配置客户端
     * @param instance 实例配置
     * @constructor
     */
    function NEW(instance: Instance): Client;
    /**
     * CMQ客户端
     */
    class Client {
        private instance;
        constructor(instance: Instance);
        /**
         * 创建队列
         * @param options
         */
        createQueue(options: CreateQueueOptions): Promise<CreateQueueResponse>;
        /**
         * 获取队列列表
         * @param options
         */
        listQueue(options: ListQueueOptions): Promise<ListQueueResponse>;
        /**
         * 获取队列属性
         * @param options
         * @constructor
         */
        getQueueAttributes(options: GetQueueAttributesOptions): Promise<GetQueueAttributesResponse>;
        /**
         * 修改队列属性
         * @param options
         * @constructor
         */
        setQueueAttributes(options: SetQueueAttributesOptions): Promise<SetQueueAttributesResponse>;
        /**
         * 删除队列
         * @param options
         * @constructor
         */
        deleteQueue(options: DeleteQueueOptions): Promise<DeleteQueueResponse>;
        /**
         * 回溯队列
         * @param options
         * @constructor
         */
        rewindQueue(options: RewindQueueOptions): Promise<RewindQueueResponse>;
        /**
         * 发送消息
         * @param options
         * @constructor
         */
        sendMessage(options: SendMessageOptions): Promise<SendMessageResponse>;
        /**
         * 批量发送消息
         * @param options
         * @constructor
         */
        batchSendMessage(options: BatchSendMessageOptions): Promise<BatchSendMessageResponse>;
        /**
         * 消费消息
         * @param options
         * @constructor
         */
        receiveMessage(options: ReceiveMessageOptions): Promise<ReceiveMessageResponse>;
        /**
         * 批量消费消息
         * @param options
         * @constructor
         */
        batchReceiveMessage(options: BatchReceiveMessageOptions): Promise<BatchReceiveMessageResponse>;
        /**
         * 删除消息
         * @param options
         * @constructor
         */
        deleteMessage(options: DeleteMessageOptions): Promise<DeleteMessageResponse>;
        /**
         * 批量删除消息
         * @param options
         * @constructor
         */
        batchDeleteMessage(options: BatchDeleteMessageOptions): Promise<BatchDeleteMessageResponse>;
        /**
         * 创建主题
         * @param options
         * @constructor
         */
        createTopic(options: CreateTopicOptions): Promise<CreateTopicResponse>;
        /**
         * 修改主题属性
         * @param options
         * @constructor
         */
        setTopicAttributes(options: SetTopicAttributesOptions): Promise<SetTopicAttributesResponse>;
        /**
         * 获取主题列表
         * @param options
         * @constructor
         */
        listTopic(options: ListTopicOptions): Promise<ListTopicResponse>;
        /**
         * 获取主题属性
         * @param options
         * @constructor
         */
        getTopicAttributes(options: GetTopicAttributesOptions): Promise<GetTopicAttributesResponse>;
        /**
         * 删除主题
         * @param options
         * @constructor
         */
        deleteTopic(options: DeleteTopicOptions): Promise<DeleteTopicResponse>;
        /**
         * 发布消息
         * @param options
         * @constructor
         */
        publishMessage(options: PublishMessageOptions): Promise<PublishMessageResponse>;
        /**
         * 批量发布消息
         * @param options
         * @constructor
         */
        batchPublishMessage(options: BatchPublishMessageOptions): Promise<BatchPublishMessageResponse>;
        /**
         * 创建订阅
         * @param options
         * @constructor
         */
        subscribe(options: SubscribeOptions): Promise<SubscribeResponse>;
        /**
         * 获取订阅列表
         * @param options
         * @constructor
         */
        listSubscriptionByTopic(options: ListSubscriptionByTopicOptions): Promise<ListSubscriptionByTopicResponse>;
        /**
         * 修改订阅属性
         * @param options
         * @constructor
         */
        setSubscriptionAttributes(options: SetSubscriptionAttributesOptions): Promise<SetSubscriptionAttributesResponse>;
        /**
         * 删除订阅
         * @param options
         * @constructor
         */
        unsubscribe(options: UnsubscribeOptions): Promise<UnsubscribeResponse>;
        /**
         * 获取订阅属性
         * @param options
         * @constructor
         */
        getSubscriptionAttributes(options: GetSubscriptionAttributesOptions): Promise<GetSubscriptionAttributesResponse>;
        /**
         * 清空订阅标签
         * @param options
         * @constructor
         */
        clearSubscriptionFilterTags(options: ClearSubscriptionFilterTagsOptions): Promise<ClearSubscriptionFilterTagsResponse>;
    }
}
