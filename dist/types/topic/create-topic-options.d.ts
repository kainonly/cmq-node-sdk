import { CommonOptions } from "../common-options";
export interface CreateTopicOptions extends CommonOptions {
    topicName: string;
    maxMsgSize?: number;
    filterType?: number;
}
