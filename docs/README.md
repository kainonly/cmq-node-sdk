# CMQ NODE SDK

CMQ 消息队列 NODE SDK

[![npm](https://img.shields.io/npm/v/cmq-sdk.svg?style=flat-square)](https://www.npmjs.com/package/cmq-sdk)
[![Travis (.org)](https://img.shields.io/travis/kainonly/cmq-node-sdk.svg?style=flat-square)](https://travis-ci.org/kainonly/cmq-node-sdk)
[![Coveralls github](https://img.shields.io/coveralls/github/kainonly/cmq-node-sdk.svg?style=flat-square)](https://coveralls.io/github/kainonly/cmq-node-sdk)
[![node](https://img.shields.io/node/v/cmq-sdk.svg?style=flat-square)](https://www.npmjs.com/package/cmq-sdk)
[![Downloads](https://img.shields.io/npm/dm/cmq-sdk.svg?style=flat-square)](https://www.npmjs.com/package/cmq-sdk)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/kainonly/cmq-nodejs-sdk/master/LICENSE)

## 安装

```shell
npm install cmq-sdk --save
```

## 快速开始

创建客户端

```typescript
import {CMQ} from 'cmq-sdk';

const cmq = CMQ.NEW({
    path: '/v2/index.php',
    signatureMethod: 'HmacSHA256',
    extranet: true,
    secretId: '<secretId>',
    secretKey: '<secretKey>',
    region: 'gz'
});

// If Javascript
//
// const { CMQ } = require('cmq-sdk');
// 
// const client = CMQ.NEW({
//   path: '/v2/index.php',
//   signatureMethod: 'HmacSHA256',
//   extranet: true,
//   secretId: '<secretId>',
//   secretKey: '<secretKey>',
//   region: 'gz',
// });
```

- **path** `string` 云 API 的请求固定路径，当前固定为 `/v2/index.php`
- **signatureMethod** `string` 加密方式，目前支持 `HmacSHA256` 和 `HmacSHA1`
- **extranet** `boolean` 是否为公网，用来决定请求地址
- **secretId** `string`  云API密钥 SecretId
- **secretKey** `string`  云API密钥 SecretKey
- **region** `string` 地域参数

> gz（广州），sh（上海），bj（北京），shjr（上海金融），szjr（深圳金融），hk（香港），cd（成都），ca(北美)，usw（美西），sg（新加坡）

创建好客户端即可操作使用，例如：创建一个 `test` 队列

```typescript
client.createQueue({
    queueName: 'test'
}).then(response => {
    // response
});

// Or use async/await
try{
    const response = await client.createQueue({
        queueName: 'test'
    });
} catch (e) {
    // error
}
```

> 详细文档请查看[cmq.kainonly.com](https://cmq.kainonly.com)，关于 cmq 介绍请查看官网 [接口文档](https://cloud.tencent.com/document/api/406/5852)

