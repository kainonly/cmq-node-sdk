## 快速开始

##### 安装

```shell
npm install cmq-nodejs-sdk --save
```

##### 创建客户端

```typescript
import {CMQ} from 'cmq-nodejs-sdk';

const cmq = CMQ.NEW({
    path: '/v2/index.php',
    signatureMethod: 'HmacSHA256',
    extranet: true,
    secretId: 'xxx',
    secretKey: 'xxx',
    region: 'gz'
});
```

- **path** `string` 云 API 的请求固定路径，当前固定为 `/v2/index.php`
- **signatureMethod** `string` 加密方式，目前支持 `HmacSHA256` 和 `HmacSHA1`
- **extranet** `boolean` 是否为公网，用来决定请求地址
- **secretId** `string`  云API密钥 SecretId
- **secretKey** `string`  云API密钥 SecretKey
- **region** `string` 地域参数

> gz（广州），sh（上海），bj（北京），shjr（上海金融），szjr（深圳金融），hk（香港），cd（成都），ca(北美)，usw（美西），sg（新加坡）

##### 使用简介

创建好客户端即可操作使用，例如：创建一个 `test` 队列

```typescript
const res = await cmq.createQueue({
    queueName: 'test'
});
```
