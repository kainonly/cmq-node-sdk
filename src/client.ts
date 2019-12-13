import { Instance } from './types/instance';
import { Common } from './common';
import { CreateQueueOptions } from './types/queue/create-queue-options';
import { CreateQueueResponse } from './types/queue/create-queue-response';
import { ListQueueOptions } from './types/queue/list-queue-options';
import { ListQueueResponse } from './types/queue/list-queue-response';
import { GetQueueAttributesOptions } from './types/queue/get-queue-attributes-options';
import { GetQueueAttributesResponse } from './types/queue/get-queue-attributes-response';
import { CommonOptions } from './types/common-options';
import { SetQueueAttributesOptions } from './types/queue/set-queue-attributes-options';
import { SetQueueAttributesResponse } from './types/queue/set-queue-attributes-response';
import { DeleteQueueOptions } from './types/queue/delete-queue-options';
import { DeleteQueueResponse } from './types/queue/delete-queue-response';
import { RewindQueueOptions } from './types/queue/rewind-queue-options';
import { RewindQueueResponse } from './types/queue/rewind-queue-response';
import { SendMessageOptions } from './types/queue/send-message-options';
import { SendMessageResponse } from './types/queue/send-message-response';
import { BatchSendMessageOptions } from './types/queue/batch-send-message-options';
import { BatchSendMessageResponse } from './types/queue/batch-send-message-response';
import { ReceiveMessageOptions } from './types/queue/receive-message-options';
import { ReceiveMessageResponse } from './types/queue/receive-message-response';
import { BatchReceiveMessageOptions } from './types/queue/batch-receive-message-options';
import { BatchReceiveMessageResponse } from './types/queue/batch-receive-message-response';
import { DeleteMessageOptions } from './types/queue/delete-message-options';
import { DeleteMessageResponse } from './types/queue/delete-message-response';
import { BatchDeleteMessageOptions } from './types/queue/batch-delete-message-options';
import { BatchDeleteMessageResponse } from './types/queue/batch-delete-message-response';
import { CreateTopicOptions } from './types/topic/create-topic-options';
import { CreateTopicResponse } from './types/topic/create-topic-response';
import { SetTopicAttributesOptions } from './types/topic/set-topic-attributes-options';
import { SetTopicAttributesResponse } from './types/topic/set-topic-attributes-response';
import { ListTopicOptions } from './types/topic/list-topic-options';
import { ListTopicResponse } from './types/topic/list-topic-response';
import { GetTopicAttributesOptions } from './types/topic/get-topic-attributes-options';
import { GetTopicAttributesResponse } from './types/topic/get-topic-attributes-response';
import { DeleteTopicOptions } from './types/topic/delete-topic-options';
import { DeleteTopicResponse } from './types/topic/delete-topic-response';
import { PublishMessageOptions } from './types/topic/publish-message-options';
import { PublishMessageResponse } from './types/topic/publish-message-response';
import { BatchPublishMessageOptions } from './types/topic/batch-publish-message-options';
import { BatchPublishMessageResponse } from './types/topic/batch-publish-message-response';
import { SubscribeOptions } from './types/topic/subscribe-options';
import { SubscribeResponse } from './types/topic/subscribe-response';
import { ListSubscriptionByTopicOptions } from './types/topic/list-subscription-by-topic-options';
import { ListSubscriptionByTopicResponse } from './types/topic/list-subscription-by-topic-response';
import { SetSubscriptionAttributesOptions } from './types/topic/set-subscription-attributes-options';
import { SetSubscriptionAttributesResponse } from './types/topic/set-subscription-attributes-response';
import { UnsubscribeOptions } from './types/topic/unsubscribe-options';
import { UnsubscribeResponse } from './types/topic/unsubscribe-response';
import { GetSubscriptionAttributesOptions } from './types/topic/get-subscription-attributes-options';
import { GetSubscriptionAttributesResponse } from './types/topic/get-subscription-attributes-response';
import { ClearSubscriptionFilterTagsOptions } from './types/topic/clear-subscription-filter-tags-options';
import { ClearSubscriptionFilterTagsResponse } from './types/topic/clear-subscription-filter-tags-response';

/**
 * 客户端类
 */
export class Client {
  /**
   * 客户端初始化
   * @param instance
   */
  constructor(
    private instance: Instance,
  ) {
  }

  /**
   * 队列类型统一发送
   * @param options
   */
  private queueRequestSend(options: CommonOptions): Promise<any> {
    return new Common(
      this.instance,
      options,
      'queue',
    ).send();
  }

  /**
   * 主题类型统一发送
   * @param options
   */
  private topicRequestSend(options: CommonOptions): Promise<any> {
    return new Common(
      this.instance,
      options,
      'topic',
    ).send();
  }

  /**
   * 创建队列
   * @param options
   */
  createQueue(options: CreateQueueOptions): Promise<CreateQueueResponse> {
    options.Action = 'CreateQueue';
    return this.queueRequestSend(options);
  }

  /**
   * 获取队列列表
   * @param options
   */
  listQueue(options: ListQueueOptions): Promise<ListQueueResponse> {
    options.Action = 'ListQueue';
    return this.queueRequestSend(options);
  }

  /**
   * 获取队列属性
   * @param options
   */
  getQueueAttributes(options: GetQueueAttributesOptions): Promise<GetQueueAttributesResponse> {
    options.Action = 'GetQueueAttributes';
    return this.queueRequestSend(options);
  }

  /**
   * 修改队列属性
   * @param options
   */
  setQueueAttributes(options: SetQueueAttributesOptions): Promise<SetQueueAttributesResponse> {
    options.Action = 'SetQueueAttributes';
    return this.queueRequestSend(options);
  }

  /**
   * 删除队列
   * @param options
   */
  deleteQueue(options: DeleteQueueOptions): Promise<DeleteQueueResponse> {
    options.Action = 'DeleteQueue';
    return this.queueRequestSend(options);
  }

  /**
   * 回溯队列
   * @param options
   */
  rewindQueue(options: RewindQueueOptions): Promise<RewindQueueResponse> {
    options.Action = 'RewindQueue';
    return this.queueRequestSend(options);
  }

  /**
   * 发送消息
   * @param options
   */
  sendMessage(options: SendMessageOptions): Promise<SendMessageResponse> {
    options.Action = 'SendMessage';
    return this.queueRequestSend(options);
  }

  /**
   * 批量发送消息
   * @param options
   */
  batchSendMessage(options: BatchSendMessageOptions): Promise<BatchSendMessageResponse> {
    options.Action = 'BatchSendMessage';
    return this.queueRequestSend(options);
  }

  /**
   * 消费消息
   * @param options
   */
  receiveMessage(options: ReceiveMessageOptions): Promise<ReceiveMessageResponse> {
    options.Action = 'ReceiveMessage';
    return this.queueRequestSend(options);
  }

  /**
   * 批量消费消息
   * @param options
   */
  batchReceiveMessage(options: BatchReceiveMessageOptions): Promise<BatchReceiveMessageResponse> {
    options.Action = 'BatchReceiveMessage';
    return this.queueRequestSend(options);
  }

  /**
   * 删除消息
   * @param options
   */
  deleteMessage(options: DeleteMessageOptions): Promise<DeleteMessageResponse> {
    options.Action = 'DeleteMessage';
    return this.queueRequestSend(options);
  }

  /**
   * 批量删除消息
   * @param options
   */
  batchDeleteMessage(options: BatchDeleteMessageOptions): Promise<BatchDeleteMessageResponse> {
    options.Action = 'BatchDeleteMessage';
    return this.queueRequestSend(options);
  }

  /**
   * 创建主题
   * @param options
   */
  createTopic(options: CreateTopicOptions): Promise<CreateTopicResponse> {
    options.Action = 'CreateTopic';
    return this.topicRequestSend(options);
  }

  /**
   * 修改主题属性
   * @param options
   */
  setTopicAttributes(options: SetTopicAttributesOptions): Promise<SetTopicAttributesResponse> {
    options.Action = 'SetTopicAttributes';
    return this.topicRequestSend(options);
  }

  /**
   * 获取主题列表
   * @param options
   */
  listTopic(options: ListTopicOptions): Promise<ListTopicResponse> {
    options.Action = 'ListTopic';
    return this.topicRequestSend(options);
  }

  /**
   * 获取主题属性
   * @param options
   */
  getTopicAttributes(options: GetTopicAttributesOptions): Promise<GetTopicAttributesResponse> {
    options.Action = 'GetTopicAttributes';
    return this.topicRequestSend(options);
  }

  /**
   * 删除主题
   * @param options
   */
  deleteTopic(options: DeleteTopicOptions): Promise<DeleteTopicResponse> {
    options.Action = 'DeleteTopic';
    return this.topicRequestSend(options);
  }

  /**
   * 发布消息
   * @param options
   */
  publishMessage(options: PublishMessageOptions): Promise<PublishMessageResponse> {
    options.Action = 'PublishMessage';
    return this.topicRequestSend(options);
  }

  /**
   * 批量发布消息
   * @param options
   */
  batchPublishMessage(options: BatchPublishMessageOptions): Promise<BatchPublishMessageResponse> {
    options.Action = 'BatchPublishMessage';
    return this.topicRequestSend(options);
  }

  /**
   * 创建订阅
   * @param options
   */
  subscribe(options: SubscribeOptions): Promise<SubscribeResponse> {
    options.Action = 'Subscribe';
    return this.topicRequestSend(options);
  }

  /**
   * 获取订阅列表
   * @param options
   */
  listSubscriptionByTopic(options: ListSubscriptionByTopicOptions): Promise<ListSubscriptionByTopicResponse> {
    options.Action = 'ListSubscriptionByTopic';
    return this.topicRequestSend(options);
  }

  /**
   * 修改订阅属性
   * @param options
   */
  setSubscriptionAttributes(options: SetSubscriptionAttributesOptions): Promise<SetSubscriptionAttributesResponse> {
    options.Action = 'SetSubscriptionAttributes';
    return this.topicRequestSend(options);
  }

  /**
   * 删除订阅
   * @param options
   */
  unsubscribe(options: UnsubscribeOptions): Promise<UnsubscribeResponse> {
    options.Action = 'Unsubscribe';
    return this.topicRequestSend(options);
  }

  /**
   * 获取订阅属性
   * @param options
   */
  getSubscriptionAttributes(options: GetSubscriptionAttributesOptions): Promise<GetSubscriptionAttributesResponse> {
    options.Action = 'GetSubscriptionAttributes';
    return this.topicRequestSend(options);
  }

  /**
   * 清空订阅标签
   * @param options
   */
  clearSubscriptionFilterTags(options: ClearSubscriptionFilterTagsOptions): Promise<ClearSubscriptionFilterTagsResponse> {
    options.Action = 'ClearSubscriptionFilterTags';
    return this.topicRequestSend(options);
  }
}
