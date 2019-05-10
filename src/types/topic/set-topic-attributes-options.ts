import {CommonOptions} from "../common-options";

export interface SetTopicAttributesOptions extends CommonOptions {
    topicName: string;
    maxMsgSize?: number;
}
