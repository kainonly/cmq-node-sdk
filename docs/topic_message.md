## 消息相关接口

##### publishMessage(options: PublishMessageOptions): Promise< PublishMessageResponse >

发布消息

- **options** `PublishMessageOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **msgBody** `string|object` 消息正文，数组时会自动转为json字符串
  - **msgTag** `array` 消息过滤标签
  - **routingKey** `string` 表示发送消息的路由路径

```typescript
const res = await cmq.publishMessage({
    topicName: 'beta-topic',
    msgBody: {
        name: 'kain'
    }
});
```

##### batchPublishMessage(options: BatchPublishMessageOptions): Promise< BatchPublishMessageResponse >

批量发布消息

- **options** `BatchPublishMessageOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **msgBody** `array` 消息正文
  - **msgTag** `array` 消息过滤标签
  - **routingKey** `string` 表示发送消息的路由路径

```typescript
const res = await cmq.batchPublishMessage({
    topicName: 'beta-topic',
    msgBody: [
        {type: 'a1', name: '11'},
        {type: 'a2', name: '22'}
    ]
});
```
