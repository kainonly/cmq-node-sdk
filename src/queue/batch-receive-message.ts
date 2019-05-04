import {Common} from "../common";
import {Instance} from "../types/instance";
import {BatchReceiveMessageOptions} from "../types/batch-receive-message-options";

export class BatchReceiveMessage extends Common {
    constructor(instance: Instance, options: BatchReceiveMessageOptions) {
        super(instance, options, 'queue');
    }
}
