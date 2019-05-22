# CMQ NODEJS SDK

CMQ 消息队列 NODEJS SDK，[CMQ 接口文档详情](https://cloud.tencent.com/document/api/406/5852)

[![npm](https://img.shields.io/npm/v/cmq-sdk.svg?style=flat-square)](https://www.npmjs.com/package/cmq-sdk)
[![Travis (.org)](https://img.shields.io/travis/kainonly/cmq-nodejs-sdk.svg?style=flat-square)](https://travis-ci.org/kainonly/cmq-nodejs-sdk)
[![node](https://img.shields.io/node/v/cmq-sdk.svg?style=flat-square)](https://www.npmjs.com/package/cmq-sdk)
[![Downloads](https://img.shields.io/npm/dm/cmq-sdk.svg?style=flat-square)](https://www.npmjs.com/package/cmq-sdk)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/kainonly/cmq-nodejs-sdk/master/LICENSE)

#### 安装

```shell
npm install cmq-sdk --save
```

#### 队列模型

###### 队列相关接口

| 接口功能     | Action ID          | 功能描述                                   |
| ------------ | ------------------ | ------------------------------------------ |
| 创建队列     | CreateQueue        | 用于在用户账户下创建一个新队列。           |
| 获取队列列表 | ListQueue          | 用于列出帐号下的队列列表，可分页获取数据。 |
| 获取队列属性 | GetQueueAttributes | 用于获取某个已创建队列的属性。             |
| 修改队列属性 | SetQueueAttributes | 用于修改消息队列的属性。                   |
| 删除队列     | DeleteQueue        | 用于删除一个已创建的队列。                 |

###### 消息相关接口

| 接口功能     | Action ID           | 功能描述                         |
| ------------ | ------------------- | -------------------------------- |
| 发送消息     | SendMessage         | 用于发送一条消息到指定的队列。   |
| 批量发送消息 | BatchSendMessage    | 用于发送批量消息到指定的队列。   |
| 消费消息     | ReceiveMessage      | 用于消费队列中的一条消息。       |
| 批量消费消息 | BatchReceiveMessage | 用于消费队列中的多条消息。       |
| 删除消息     | DeleteMessage       | 用于删除已经被消费过的消息。     |
| 批量删除消息 | BatchDeleteMessage  | 用于批量删除已经被消费过的消息。 |

#### 主题模型

###### 主题相关接口

| 接口功能     | Action ID          | 功能描述                                   |
| ------------ | ------------------ | ------------------------------------------ |
| 创建主题     | CreateTopic        | 用于在用户账号下创建一个新主题。           |
| 修改主题属性 | SetTopicAttributes | 用于修改某个已创建主题的属性。             |
| 获取主题列表 | ListTopic          | 用于列出账号下的主题列表，可分页获取数据。 |
| 获取主题属性 | GetTopicAttributes | 用于获取某个已创建主题的属性。             |
| 删除主题     | DeleteTopic        | 用于删除一个已创建的主题。                 |

###### 消息相关接口

| 接口功能     | Action ID           | 功能描述                     |
| ------------ | ------------------- | ---------------------------- |
| 发布消息     | PublishMessage      | 用于发布一条消息到指定主题。 |
| 批量发布消息 | BatchPublishMessage | 用于发布批量消息到指定主题。 |

###### 订阅相关接口

| 接口功能     | Action ID                 | 功能描述                                   |
| ------------ | ------------------------- | ------------------------------------------ |
| 创建订阅     | Subscribe                 | 用于在用户账号下创建一个新订阅。           |
| 获取订阅列表 | ListSubscriptionByTopic   | 用于列主主题下的订阅列表，可分页获取数据。 |
| 修改订阅属性 | SetSubscriptionAttributes | 用于设置某个已创建订阅的属性。             |
| 获取订阅属性 | GetSubscriptionAttributes | 用于获取某个已创建订阅的属性。             |
| 删除订阅     | Unsubscribe               | 用于删除一个已创建的订阅。                 |
