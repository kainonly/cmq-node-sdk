import {Common} from "../common";
import {Instance} from "../types/instance";
import {DeleteMessageOptions} from "../types/delete-message-options";

export class DeleteMessage extends Common {
    constructor(instance: Instance, options: DeleteMessageOptions) {
        super(instance, options, 'queue');
    }
}
