import {Common} from "../common";
import {Instance} from "../types/instance";
import {DeleteQueueOptions} from "../types/delete-queue-options";

export class DeleteQueue extends Common {
    constructor(instance: Instance, options: DeleteQueueOptions) {
        super(instance, options, 'queue');
    }
}