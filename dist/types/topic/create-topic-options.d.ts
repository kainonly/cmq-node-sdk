import { CommonOptions } from '../common-options';
export interface CreateTopicOptions extends CommonOptions {
    /**
     * 主题名字
     */
    topicName: string;
    /**
     * 消息最大长度
     */
    maxMsgSize?: number;
    /**
     * 用于指定主题的消息匹配策略
     */
    filterType?: number;
}
