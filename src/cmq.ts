import { createHmac } from 'crypto';
import { Dto, Options, SendMessageDto, SendMessageResult } from './types';
import axios from 'axios';

export class CMQ {
  /**
   * 请求协议
   */
  private readonly protocol: string;
  /**
   * 请求固定路径
   */
  private readonly path: string;

  constructor(private options: Options) {
    if (!options.protocol) {
      this.protocol = 'https://';
    }
    if (!options.path) {
      this.path = '/v2/index.php';
    }
  }

  /**
   * 发起数据流请求
   */
  send<T, R>(dto: T & Dto): Promise<R> {
    dto.SignatureMethod = 'HmacSHA256';
    dto.SecretId = this.options.secretId;
    dto.Region = this.options.region;
    dto.Nonce = Math.trunc(Math.random() * 10000);
    dto.Timestamp = Math.trunc(new Date().getTime() / 1000);
    const params: string[] = [];
    for (const key of Object.keys(dto).sort()) {
      params.push(`${key.replace('_', '.')}=${Reflect.get(dto, key)}`);
    }
    dto.Signature = createHmac('sha256', this.options.secretKey)
      .update(`POST${this.options.endpoint}${this.path}?${params.join('&')}`)
      .digest('base64');
    const data = new URLSearchParams();
    for (const [key, value] of Object.entries(dto)) {
      if (Array.isArray(value)) {
        value.forEach((v, i) => {
          data.append(`${key}.${i}`, v);
        });
      } else {
        data.append(key, value);
      }
    }
    return axios.post<R>(this.protocol + this.options.endpoint + this.path, data).then(response => {
      return response.data;
    });
  }

  /**
   * 用于发送一条消息到指定的队列
   * @param dto
   */
  sendMessage(dto: SendMessageDto): Promise<SendMessageResult> {
    dto.Action = 'SendMessage';
    return this.send(dto);
  }
}
