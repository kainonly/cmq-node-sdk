import { CommonResponse } from "../common-response";
export interface BatchPublishMessageResponse extends CommonResponse {
    /**
     * 服务器生成消息的唯一标识 ID 列表，每个元素是一条消息的信息
     */
    msgList: {
        /**
         * 服务器生成消息的唯一标识 ID
         */
        msgId: string;
    }[];
}
