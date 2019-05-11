import { CommonOptions } from "../common-options";
export interface SetTopicAttributesOptions extends CommonOptions {
    /**
     * 主题名字
     */
    topicName: string;
    /**
     * 消息最大长度
     */
    maxMsgSize?: number;
}
