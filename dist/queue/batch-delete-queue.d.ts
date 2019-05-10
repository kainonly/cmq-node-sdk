import { Common } from "../common";
import { Instance } from "../types/instance";
import { BatchDeleteMessageOptions } from "../types/batch-delete-message-options";
export declare class BatchDeleteQueue extends Common {
    constructor(instance: Instance, options: BatchDeleteMessageOptions);
}
