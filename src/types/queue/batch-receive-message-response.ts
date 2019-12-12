import { CommonResponse } from '../common-response';

export interface BatchReceiveMessageResponse extends CommonResponse {
  /**
   * message 信息列表，每个元素是一条消息的具体信息
   */
  msgInfoList: {
    /**
     * 本次消费的消息正文
     */
    msgBody: string,
    /**
     * 本次消费的消息唯一标识 ID
     */
    msgId: string,
    /**
     * 每次消费返回唯一的消息句柄
     */
    receiptHandle: string,
    /**
     * 消费被生产出来，进入队列的时间
     */
    enqueueTime: number,
    /**
     * 第一次消费该消息的时间
     */
    firstDequeueTime: number,
    /**
     * 消息的下次可见（可再次被消费）时间
     */
    nextVisibleTime: number,
    /**
     * 消息被消费的次数
     */
    dequeueCount: number
  }[];
}
