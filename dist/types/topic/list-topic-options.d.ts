import { CommonOptions } from "../common-options";
export interface ListTopicOptions extends CommonOptions {
    /**
     * 用于过滤主题列表
     */
    searchWord?: string;
    /**
     * 分页时本页获取主题列表的起始位置
     */
    offset?: number;
    /**
     * 分页时本页获取主题的个数
     */
    limit?: number;
}
