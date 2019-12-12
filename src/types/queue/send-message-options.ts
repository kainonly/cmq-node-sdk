import { CommonOptions } from '../common-options';

export interface SendMessageOptions extends CommonOptions {
  /**
   * 队列名字
   */
  queueName: string;
  /**
   * 消息正文
   */
  msgBody: any;
  /**
   * 单位为秒，表示该消息发送到队列后，需要延时多久用户才可见该消息。
   */
  delaySeconds?: number;
}
