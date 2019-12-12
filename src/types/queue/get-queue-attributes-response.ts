import { CommonResponse } from '../common-response';

export interface GetQueueAttributesResponse extends CommonResponse {
  /**
   * 最大堆积消息数
   */
  maxMsgHeapNum: number;
  /**
   * 消息接收长轮询等待时间
   */
  pollingWaitSeconds: number;
  /**
   * 消息可见性超时
   */
  visibilityTimeout: number;
  /**
   * 消息最大长度
   */
  maxMsgSize: number;
  /**
   * 消息保留周期
   */
  msgRetentionSeconds: number;
  /**
   * 队列的创建时间
   */
  createTime: number;
  /**
   * 最后一次修改队列属性的时间
   */
  lastModifyTime: number;
  /**
   * 在队列中处于 Active 状态（不处于被消费状态）的消息总数，为近似值。
   */
  activeMsgNum: number;
  /**
   * 在队列中处于 Inactive 状态（正处于被消费状态）的消息总数，为近似值。
   */
  inactiveMsgNum: number;
  /**
   * 回溯队列的消息回溯时间最大值，取值范围0 - 43200秒，0表示不开启消息回溯。
   */
  rewindSeconds: number;
  /**
   * 已调用 DelMsg 接口删除，但还在回溯保留时间内的消息数量。
   */
  rewindmsgNum: number;
  /**
   * 消息最小未消费时间，单位为秒。
   */
  minMsgTime: number;
}
