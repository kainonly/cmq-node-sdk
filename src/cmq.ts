import { createHmac } from 'crypto';
import {
  BatchDeleteMessageDto,
  BatchDeleteMessageResult,
  BatchPublishMessageDto,
  BatchPublishMessageResult,
  BatchReceiveMessageDto,
  BatchReceiveMessageResult,
  BatchSendMessageDto,
  BatchSendMessageResult,
  DeleteMessageDto,
  Dto,
  Option,
  PublishMessageDto,
  PublishMessageResult,
  ReceiveMessageDto,
  ReceiveMessageResult,
  Result,
  SendMessageDto,
  SendMessageResult
} from './types';
import axios, { AxiosRequestConfig } from 'axios';
import { tdmq } from 'tencentcloud-sdk-nodejs';
import { Client } from 'tencentcloud-sdk-nodejs/tencentcloud/services/tdmq/v20200217/tdmq_client';

export class CMQ {
  /**
   * 请求协议
   */
  private readonly protocol: string;
  /**
   * 请求固定路径
   */
  private readonly path: string;

  /**
   * 云 API
   * 控制流支持方式
   */
  api?: Client;

  constructor(private option: Option) {
    if (!option.protocol) {
      this.protocol = 'https://';
    }
    if (!option.path) {
      this.path = '/v2/index.php';
    }
    if (option.api) {
      this.api = new tdmq.v20200217.Client({
        credential: {
          secretId: option.secretId,
          secretKey: option.secretKey
        },
        region: option.api.region,
        profile: {
          httpProfile: {
            endpoint: option.api.endpoint
          }
        }
      });
    }
  }

  /**
   * 发起数据流请求
   */
  send<T, R>(data: T & Dto, config?: AxiosRequestConfig): Promise<R> {
    data.SignatureMethod = 'HmacSHA256';
    data.SecretId = this.option.secretId;
    data.Region = this.option.region;
    data.Nonce = Math.trunc(Math.random() * 10000);
    data.Timestamp = Math.trunc(new Date().getTime() / 1000);
    const params: string[] = [];
    for (const key of Object.keys(data).sort()) {
      params.push(`${key.replace(/_/g, '.')}=${Reflect.get(data, key)}`);
    }
    data.Signature = createHmac('sha256', this.option.secretKey)
      .update(`POST${this.option.host}${this.path}?${params.join('&')}`)
      .digest('base64');
    const payload = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        value.forEach((v, i) => {
          payload.append(`${key}.${i}`, v);
        });
      } else {
        payload.append(key, value);
      }
    }
    return axios
      .post<R>(this.protocol + this.option.host + this.path, payload, {
        timeout: 30000,
        ...config
      })
      .then(response => response.data);
  }

  /**
   * 发送消息
   * @param data
   */
  sendMessage(data: SendMessageDto): Promise<SendMessageResult> {
    data.Action = 'SendMessage';
    return this.send(data);
  }

  /**
   * 批量发送消息
   * @param data
   */
  batchSendMessage(data: BatchSendMessageDto): Promise<BatchSendMessageResult> {
    data.Action = 'BatchSendMessage';
    data.msgBody.forEach((value, index) => {
      Reflect.set(data, `msgBody.${index}`, value);
    });
    delete data.msgBody;
    return this.send(data);
  }

  /**
   * 设置超时
   * @param data
   * @private
   */
  private static pollingWaitTime(data: ReceiveMessageDto | BatchReceiveMessageDto): AxiosRequestConfig {
    const cfg: AxiosRequestConfig = {};
    if (data.pollingWaitSeconds) {
      cfg.timeout = (data.pollingWaitSeconds + 1) * 1000;
    }
    return cfg;
  }

  /**
   * 消费消息
   * @param data
   */
  receiveMessage(data: ReceiveMessageDto): Promise<ReceiveMessageResult> {
    data.Action = 'ReceiveMessage';
    return this.send(data, CMQ.pollingWaitTime(data));
  }

  /**
   * 批量消费消息
   * @param data
   */
  batchReceiveMessage(data: BatchReceiveMessageDto): Promise<BatchReceiveMessageResult> {
    data.Action = 'BatchReceiveMessage';
    return this.send(data, CMQ.pollingWaitTime(data));
  }

  /**
   * 删除消息
   * @param data
   */
  deleteMessage(data: DeleteMessageDto): Promise<Result> {
    data.Action = 'DeleteMessage';
    return this.send(data);
  }

  /**
   * 批量删除消息
   * @param data
   */
  batchDeleteMessage(data: BatchDeleteMessageDto): Promise<BatchDeleteMessageResult> {
    data.Action = 'BatchDeleteMessage';
    data.receiptHandle.forEach((value, index) => {
      Reflect.set(data, `receiptHandle.${index}`, value);
    });
    delete data.receiptHandle;
    return this.send(data);
  }

  /**
   * 发布消息
   * @param data
   */
  publishMessage(data: PublishMessageDto): Promise<PublishMessageResult> {
    data.Action = 'PublishMessage';
    return this.send(data);
  }

  /**
   * 批量发布消息
   * @param data
   */
  batchPublishMessage(data: BatchPublishMessageDto): Promise<BatchPublishMessageResult> {
    data.Action = 'BatchPublishMessage';
    data.msgBody.forEach((value, index) => {
      Reflect.set(data, `msgBody.${index}`, value);
    });
    delete data.msgBody;
    data.msgTag?.forEach((value, index) => {
      Reflect.set(data, `msgTag.${index}`, value);
    });
    delete data.msgTag;
    return this.send(data);
  }
}
