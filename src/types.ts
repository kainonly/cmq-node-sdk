export interface Options {
  /**
   * 请求协议
   */
  protocol?: string;
  /**
   * API 请求地址
   */
  endpoint: string;

  /**
   * 请求固定路径
   */
  path?: string;

  /**
   * 访问密钥 ID
   */
  secretId: string;

  /**
   * 访问密钥 Key
   */
  secretKey: string;

  /**
   * 区域
   */
  region: string;
}

export interface Dto {
  /**
   * 具体操作的指令接口名称
   */
  Action?: string;

  /**
   * 地域参数，用来标识希望操作哪个地域的实例。
   */
  Region?: string;

  /**
   * 当前 UNIX 时间戳，可记录发起 API 请求的时间
   */
  Timestamp?: number;

  /**
   * 随机正整数，与 Timestamp 联合起来， 用于防止重放攻击
   */
  Nonce?: number;

  /**
   * 在 云API密钥 上申请的标识身份的 SecretId
   */
  SecretId?: string;

  /**
   * 请求签名，用来验证此次请求的合法性，需要用户根据实际的输入参数计算得出
   */
  Signature?: string;

  /**
   * 签名方式，目前支持 HmacSHA256 和 HmacSHA1
   */
  SignatureMethod?: string;

  /**
   * 临时证书所用的 Token，需要结合临时密钥一起使用
   */
  Token?: string;
}

export interface Result {
  /**
   * 公共错误码
   */
  code: number;
  /**
   * 错误提示信息
   */
  message: string;
  /**
   * 服务器生成的请求 ID
   */
  requestId: string;

  [key: string]: unknown;
}

export interface SendMessageDto extends Dto {
  /**
   * 队列名字
   */
  queueName: string;
  /**
   * 消息正文
   */
  msgBody: string;
  /**
   * 单位为秒，表示该消息发送到队列后，需要延时多久用户才可见该消息。
   */
  delaySeconds?: number;
}

export interface SendMessageResult extends Result {
  /**
   * 服务器生成消息的唯一标识 ID。
   */
  msgId: string;
}
