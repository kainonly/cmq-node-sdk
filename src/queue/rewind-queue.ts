import {Common} from "../common";
import {Instance} from "../types/instance";
import {RewindQueueOptions} from "../types/rewind-queue-options";

export class RewindQueue extends Common {
    constructor(instance: Instance, options: RewindQueueOptions) {
        super(instance, options, 'queue');
    }
}