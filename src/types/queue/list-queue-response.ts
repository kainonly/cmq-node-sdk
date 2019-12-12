import { CommonResponse } from '../common-response';

export interface ListQueueResponse extends CommonResponse {
  /**
   * 用户帐号下本次请求返回的队列总数，而非分页后本页获取的队列数量
   */
  totalCount: number;
  /**
   * 队列列表信息，每个元素表示一个队列的信息
   */
  queueList: { queueId: string, queueName: string }[];
}
