import { CommonResponse } from '../common-response';
export interface GetTopicAttributesResponse extends CommonResponse {
    /**
     * 当前该主题中消息数目（消息堆积数)
     */
    msgCount: number;
    /**
     * 消息最大长度
     */
    maxMsgSize: number;
    /**
     * 消息在主题中最长存活时间
     */
    msgRetentionSeconds: number;
    /**
     * 主题的创建时间
     */
    createTime: number;
    /**
     * 最后一次修改主题属性的时间
     */
    lastModifyTime: number;
    /**
     * 描述用户创建订阅时选择的过滤策略
     */
    filterType: number;
}
