import {Common} from "../common";
import {Instance} from "../types/instance";
import {GetQueueAttributesOptions} from "../types/get-queue-attributes-options";

export class GetQueueAttributes extends Common {
    constructor(instance: Instance, options: GetQueueAttributesOptions) {
        super(instance, options, 'queue');
    }
}