# CMQ NODE SDK

CMQ 消息队列 NODE SDK

[![Github Actions](https://img.shields.io/github/workflow/status/kainonly/cmq-node-sdk/单元测试?style=flat-square)](https://github.com/kainonly/cmq-node-sdk/actions/workflows/testing.yml)
[![Coveralls github](https://img.shields.io/coveralls/github/kainonly/cmq-node-sdk.svg?style=flat-square)](https://coveralls.io/github/kainonly/cmq-node-sdk)
[![npm](https://img.shields.io/npm/v/cmq-sdk.svg?style=flat-square)](https://www.npmjs.com/package/cmq-sdk)
[![Downloads](https://img.shields.io/npm/dm/cmq-sdk.svg?style=flat-square)](https://www.npmjs.com/package/cmq-sdk)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/kainonly/cmq-nodejs-sdk/master/LICENSE)

## 开始

安装依赖

```shell
npm install cmq-sdk
```

创建客户端

```typescript
import { CMQ } from 'cmq-sdk';

const client = new CMQ({
  host: 'cmq-gz.public.tencenttdmq.com',
  secretId: '<访问密钥 Id>',
  secretKey: '<访问密钥 Key>',
  region: 'gz',
  // 如果要使用控制流，则需要设置云 API 配置
  api: {
    endpoint: 'tdmq.tencentcloudapi.com',
    region: 'ap-guangzhou'
  }
});
```

使用

```typescript
async function bootstrap() {
  // 使用控制流创建队列
  const r1 = await client.api.CreateCmqQueue({
    QueueName: 'dev'
  });
  console.log(r1);

  // 投递消息
  const r2 = await client.sendMessage({
    queueName: 'dev',
    msgBody: 'hi'
  });

  console.log(r2);
}

bootstrap();
```

方法与相关文档参数一致：

- [数据流文档](https://cloud.tencent.com/document/product/1496/61039)
- [控制流文档](https://cloud.tencent.com/document/product/1496/65108)

> 控制流是引入 [tencentcloud-sdk-nodejs](https://github.com/tencentcloud/tencentcloud-sdk-nodejs) 腾讯云开发者工具套件实现的
