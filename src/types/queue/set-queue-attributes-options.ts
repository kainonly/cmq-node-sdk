import { CommonOptions } from '../common-options';

export interface SetQueueAttributesOptions extends CommonOptions {
  /**
   * 队列名字
   */
  queueName: string;
  /**
   * 最大堆积消息数
   */
  maxMsgHeapNum?: number;
  /**
   * 消息接收长轮询等待时间
   */
  pollingWaitSeconds?: number;
  /**
   * 消息可见性超时
   */
  visibilityTimeout?: number;
  /**
   * 消息最大长度
   */
  maxMsgSize?: number;
  /**
   * 消息保留周期
   */
  msgRetentionSeconds?: number;
  /**
   * 消息最长回溯时间
   */
  rewindSeconds?: number;
}
