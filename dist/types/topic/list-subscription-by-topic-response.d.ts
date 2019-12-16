import { CommonResponse } from '../common-response';
export interface ListSubscriptionByTopicResponse extends CommonResponse {
    /**
     * 用户帐号下本次请求返回的主题总数，而非分页后本页获取的主题数量
     */
    totalCount: number;
    /**
     * 主题列表信息，每个元素表示一个主题的信息
     */
    subscriptionList: {
        /**
         * 订阅 ID
         */
        subscriptionId: string;
        /**
         * 订阅名字
         */
        subscriptionName: string;
        /**
         * 订阅的协议，目前支持两种协议：HTTP、queue
         */
        protocol: string;
        /**
         * 接收通知的 endpoint
         */
        endpoint: string;
    }[];
}
