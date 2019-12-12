import { CommonOptions } from '../common-options';

export interface DeleteTopicOptions extends CommonOptions {
  /**
   * 主题名字
   */
  topicName: string;
}
