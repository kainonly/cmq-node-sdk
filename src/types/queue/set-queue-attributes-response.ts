import {CommonResponse} from "../common-response";

export interface SetQueueAttributesResponse extends CommonResponse {
    /**
     * 更改后的最大堆积消息数
     */
    maxMsgHeapNum: number;
    /**
     * 更改后的消息接收长轮询等待时间
     */
    pollingWaitSeconds: number;
    /**
     * 更改后的消息可见性超时
     */
    visibilityTimeout: number;
    /**
     * 更改后的消息最大长度
     */
    maxMsgSize: number;
    /**
     * 更改后的消息保留周期
     */
    msgRetentionSeconds: number;
    /**
     * 更改后的最长消息回溯时间
     */
    rewindSeconds: number;
}
