import {CommonOptions} from '../common-options';

export interface ListSubscriptionByTopicOptions extends CommonOptions {
    /**
     * 主题名字
     */
    topicName: string;
    /**
     * 用于过滤订阅列表
     */
    searchWord?: string;
    /**
     * 分页时本页获取订阅列表的起始位置
     */
    offset?: number;
    /**
     * 分页时本页获取订阅的个数
     */
    limit?: number;
}
