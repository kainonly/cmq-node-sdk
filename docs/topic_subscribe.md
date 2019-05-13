## 订阅相关接口

##### subscribe(options: SubscribeOptions): Promise< SubscribeResponse >

创建订阅

- **options** `SubscribeOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **subscriptionName** `string` 订阅名字，在单个地域同一帐号的同一主题下唯一
  - **protocol** `string` 订阅的协议，目前支持两种协议：HTTP、Queue
  - **endpoint** `string` 接收投递消息的 endpoint
  - **notifyStrategy** `string` 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。BACKOFF_RETRY，退避重试；EXPONENTIAL_DECAY_RETRY，指数衰退重试
  - **notifyContentFormat** `string` 推送内容的格式。取值：（1）JSON。（2）SIMPLIFIED，即 raw 格式
  - **filterTag** `array` 消息标签（用于消息过滤)
  - **bindingKey** `array` 订阅接收消息的过滤策略

```typescript
const res = await cmq.subscribe({
    topicName: 'sub-topic',
    subscriptionName: 'test',
    protocol: 'queue',
    endpoint: 'normal',
    filterTag: ['mytag']
});
```

##### listSubscriptionByTopic(options: ListSubscriptionByTopicOptions): Promise< ListSubscriptionByTopicResponse >

获取订阅列表

- **options** `ListSubscriptionByTopicOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **searchWord** `string` 用于过滤订阅列表，后台用模糊匹配的方式来返回符合条件的订阅列表
  - **offset** `number` 分页时本页获取订阅列表的起始位置
  - **limit** `number` 分页时本页获取订阅的个数

```typescript
const res = await cmq.listSubscriptionByTopic({
    topicName: 'sub-topic'
});
```

##### setSubscriptionAttributes(options: SetSubscriptionAttributesOptions): Promise< SetSubscriptionAttributesResponse >

修改订阅属性

- **options** `SetSubscriptionAttributesOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **subscriptionName** `string` 订阅名字，在单个地域同一帐号的同一主题下唯一
  - **notifyStrategy** `string` 向 endpoint 推送消息出现错误时，CMQ 推送服务器的重试策略。BACKOFF_RETRY，退避重试；EXPONENTIAL_DECAY_RETRY，指数衰退重试
  - **notifyContentFormat** `string` 推送内容的格式。取值：（1）JSON。（2）SIMPLIFIED，即 raw 格式
  - **filterTag** `array` 消息标签（用于消息过滤)
  - **bindingKey** `array` 订阅接收消息的过滤策略

```typescript
const res = await cmq.setSubscriptionAttributes({
    topicName: 'sub-topic',
    subscriptionName: 'test',
    notifyStrategy: 'BACKOFF_RETRY'
});
```

##### unsubscribe(options: UnsubscribeOptions): Promise< UnsubscribeResponse >

删除订阅

- **options** `UnsubscribeOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **subscriptionName** `string` 订阅名字，在单个地域同一帐号的同一主题下唯一

```typescript
const res = await cmq.unsubscribe({
    topicName: 'sub-topic',
    subscriptionName: 'test'
});
```

##### getSubscriptionAttributes(options: GetSubscriptionAttributesOptions): Promise< GetSubscriptionAttributesResponse >

获取订阅属性

- **options** `GetSubscriptionAttributesOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **subscriptionName** `string` 订阅名字，在单个地域同一帐号的同一主题下唯一

```typescript
const res = await cmq.getSubscriptionAttributes({
    topicName: 'sub-topic',
    subscriptionName: 'test'
});
```

##### clearSubscriptionFilterTags(options: ClearSubscriptionFilterTagsOptions): Promise< ClearSubscriptionFilterTagsResponse >

清空订阅标签

- **options** `ClearSubscriptionFilterTagsOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **subscriptionName** `string` 订阅名字，在单个地域同一帐号的同一主题下唯一

```typescript
const res = await cmq.clearSubscriptionFilterTags({
    topicName: 'sub-topic',
    subscriptionName: 'test'
});
```


