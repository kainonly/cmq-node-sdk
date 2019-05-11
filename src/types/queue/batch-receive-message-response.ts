import {CommonResponse} from "../common-response";
import {ReceiveMessageResponse} from "./receive-message-response";

export interface BatchReceiveMessageResponse extends CommonResponse {
    /**
     * message 信息列表，每个元素是一条消息的具体信息
     */
    msgInfoList: ReceiveMessageResponse[];
}
