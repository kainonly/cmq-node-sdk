import {Common} from "../common";
import {Instance} from "../types/instance";
import {SetQueueAttributesOptions} from "../types/set-queue-attributes-options";

export class SetQueueAttributes extends Common {
    constructor(instance: Instance, options: SetQueueAttributesOptions) {
        super(instance, options, 'queue');
    }
}