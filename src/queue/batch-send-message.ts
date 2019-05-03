import {Common} from "../common";
import {Instance} from "../types/instance";
import {BatchSendMessageOptions} from "../types/batch-send-message-options";

export class BatchSendMessage extends Common {
    constructor(instance: Instance, options: BatchSendMessageOptions) {
        super(instance, options, 'queue');
    }
}
