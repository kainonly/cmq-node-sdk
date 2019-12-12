import { CommonResponse } from '../common-response';

export interface ListTopicResponse extends CommonResponse {
  /**
   * 用户帐号下本次请求返回的主题总数，而非分页后本页获取的主题数量
   */
  totalCount: number;
  /**
   * 主题列表信息，每个元素表示一个主题的信息
   */
  topicList: {
    /**
     * 主题的唯一标识 ID
     */
    topicId: string,
    /**
     * 主题名字
     */
    topicName: string
  }[];
}
