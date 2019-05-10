import { CommonOptions } from "../common-options";
export interface ListQueueOptions extends CommonOptions {
    /**
     * 用于过滤队列列表，后台用模糊匹配的方式来返回符合条件的队列列表
     */
    searchWord?: string;
    /**
     * 分页时本页获取队列列表的起始位置
     */
    offset?: number;
    /**
     * 分页时本页获取队列的个数
     */
    limit?: number;
}
