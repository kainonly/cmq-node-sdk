import { CommonOptions } from "../common-options";
export interface ListTopicOptions extends CommonOptions {
    searchWord?: string;
    offset?: number;
    limit?: number;
}
