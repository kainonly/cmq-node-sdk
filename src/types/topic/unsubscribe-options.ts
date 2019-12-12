import { CommonOptions } from '../common-options';

export interface UnsubscribeOptions extends CommonOptions {
  /**
   * 主题名字
   */
  topicName: string;
  /**
   * 订阅名字
   */
  subscriptionName: string;
}
