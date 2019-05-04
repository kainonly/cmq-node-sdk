import {Common} from "../common";
import {Instance} from "../types/instance";
import {BatchDeleteMessageOptions} from "../types/batch-delete-message-options";

export class BatchDeleteQueue extends Common {
    constructor(instance: Instance, options: BatchDeleteMessageOptions) {
        super(instance, options, 'queue');
    }
}
