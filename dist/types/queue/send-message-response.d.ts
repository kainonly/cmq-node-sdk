import { CommonResponse } from '../common-response';
export interface SendMessageResponse extends CommonResponse {
    /**
     * 服务器生成消息的唯一标识 ID。
     */
    msgId: string;
}
