import { CommonOptions } from "./common-options";
export interface ListQueueOptions extends CommonOptions {
    searchWord?: string;
    offset?: number;
    limit?: number;
}
