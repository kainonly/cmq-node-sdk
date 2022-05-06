export interface Option {
  /**
   * 协议
   */
  protocol?: string;
  /**
   * 地址
   */
  host: string;

  /**
   * 固定路径
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

  /**
   * 使用云 API
   */
  api?: APIOption;
}

export interface APIOption {
  endpoint: string;
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

export interface BatchSendMessageDto extends Dto {
  /**
   * 队列名字
   */
  queueName: string;
  /**
   * 消息正文
   */
  msgBody: string[];
  /**
   * 单位为秒，表示该消息发送到队列后，需要延时多久用户才可见。（该延时对一批消息有效，不支持多对多映射）
   */
  delaySeconds?: number;
}

export interface BatchSendMessageResult extends Result {
  /**
   * 服务器生成消息的唯一标识 ID 列表，每个元素是一条消息的信息。
   */
  msgList: {
    /**
     * 服务器生成消息的唯一标识 ID。
     */
    msgId: string;
  }[];
}

export interface ReceiveMessageDto extends Dto {
  /**
   * 队列名字
   */
  queueName: string;
  /**
   * 本次请求的长轮询等待时间
   */
  pollingWaitSeconds?: number;
}

export interface ReceiveMessageResult extends Result {
  /**
   * 本次消费的消息正文
   */
  msgBody: string;
  /**
   * 本次消费的消息唯一标识 ID
   */
  msgId: string;
  /**
   * 每次消费返回唯一的消息句柄
   */
  receiptHandle: string;
  /**
   * 消费被生产出来，进入队列的时间
   */
  enqueueTime: number;
  /**
   * 第一次消费该消息的时间
   */
  firstDequeueTime: number;
  /**
   * 消息的下次可见（可再次被消费）时间
   */
  nextVisibleTime: number;
  /**
   * 消息被消费的次数
   */
  dequeueCount: number;
}

export interface BatchReceiveMessageDto extends Dto {
  /**
   * 队列名字
   */
  queueName: string;
  /**
   * 本次消费的消息数量
   */
  numOfMsg: number;
  /**
   * 本次请求的长轮询等待时间
   */
  pollingWaitSeconds?: number;
}

export interface BatchReceiveMessageResult extends Result {
  /**
   * message 信息列表，每个元素是一条消息的具体信息
   */
  msgInfoList: {
    /**
     * 本次消费的消息正文
     */
    msgBody: string;
    /**
     * 本次消费的消息唯一标识 ID
     */
    msgId: string;
    /**
     * 每次消费返回唯一的消息句柄
     */
    receiptHandle: string;
    /**
     * 消费被生产出来，进入队列的时间
     */
    enqueueTime: number;
    /**
     * 第一次消费该消息的时间
     */
    firstDequeueTime: number;
    /**
     * 消息的下次可见（可再次被消费）时间
     */
    nextVisibleTime: number;
    /**
     * 消息被消费的次数
     */
    dequeueCount: number;
  }[];
}

export interface DeleteMessageDto extends Dto {
  /**
   * 队列名字
   */
  queueName: string;
  /**
   * 上次消费返回唯一的消息句柄，用于删除消息
   */
  receiptHandle: string;
}

export interface BatchDeleteMessageDto extends Dto {
  /**
   * 队列名字
   */
  queueName: string;
  /**
   * 上次消费消息时返回的消息句柄
   */
  receiptHandle: string[];
}

export interface BatchDeleteMessageResult extends Result {
  /**
   * 无法成功删除的错误列表
   */
  errorList: {
    /**
     * 公共错误码
     */
    code: number;
    /**
     * 错误提示信息
     */
    message: string;
    /**
     * 对应删除失败的消息句柄
     */
    receiptHandle: string;
  }[];
}

export interface PublishMessageDto extends Dto {
  /**
   * 主题名字
   */
  topicName: string;
  /**
   * 消息正文
   */
  msgBody: string;
  /**
   * 消息过滤标签。消息标签（用于消息过滤)
   */
  msgTag?: string[];
  /**
   * 发送消息的路由路径
   */
  routingKey?: string;
}

export interface PublishMessageResult extends Result {
  /**
   * 服务器生成消息的唯一标识 ID
   */
  msgId: string;
}

export interface BatchPublishMessageDto extends Dto {
  /**
   * 主题名字
   */
  topicName: string;
  /**
   * 消息正文。表示这一批量中的一条消息
   */
  msgBody: string[];
  /**
   * 消息过滤标签。消息标签（用于消息过滤)
   */
  msgTag?: string[];
  /**
   * 送消息的路由路径
   */
  routingKey?: string;
}

export interface BatchPublishMessageResult extends Result {
  /**
   * 服务器生成消息的唯一标识 ID 列表，每个元素是一条消息的信息
   */
  msgList: {
    /**
     * 服务器生成消息的唯一标识 ID
     */
    msgId: string;
  }[];
}
