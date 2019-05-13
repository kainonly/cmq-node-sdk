## 主题相关接口

##### createTopic(options: CreateTopicOptions): Promise< CreateTopicResponse >

创建主题

- **options** `CreateTopicOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **maxMsgSize** `number` 消息最大长度
  - **filterType** `number` 用于指定主题的消息匹配策略，filterType =1 或为空， 表示该主题下所有订阅使用 filterTag 标签过滤，filterType =2 表示用户使用 bindingKey 过滤

```typescript
const res = await cmq.createTopic({
    topicName: 'test-topic'
});
```

##### setTopicAttributes(options: SetTopicAttributesOptions): Promise< SetTopicAttributesResponse >

修改主题属性

- **options** `SetTopicAttributesOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一
  - **maxMsgSize** `number` 消息最大长度

```typescript
const res = await cmq.setTopicAttributes({
    topicName: 'test-topic',
    maxMsgSize: 131072
});
```

##### listTopic(options: ListTopicOptions): Promise< ListTopicResponse >

获取主题列表

- **options** `ListTopicOptions`
  - **searchWord** `string` 用于过滤主题列表，后台用模糊匹配的方式来返回符合条件的主题列表
  - **offset** `number` 分页时本页获取主题列表的起始位置
  - **limit** `number` 分页时本页获取主题的个数

```typescript
const res = await cmq.listTopic({});
```

##### getTopicAttributes(options: GetTopicAttributesOptions): Promise< GetTopicAttributesResponse >

获取主题属性

- **options** `GetTopicAttributesOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一

```typescript
const res = await cmq.getTopicAttributes({
    topicName: 'test-topic'
});
```

##### deleteTopic(options: DeleteTopicOptions): Promise< DeleteTopicResponse >

删除主题

- **options** `DeleteTopicOptions`
  - **topicName** `string` 主题名字，在单个地域同一帐号下唯一

```typescript
const res = await cmq.deleteTopic({
    topicName: 'test-topic'
});
```
