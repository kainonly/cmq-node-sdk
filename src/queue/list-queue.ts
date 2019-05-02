import {Common} from '../common';
import {Instance} from '../types/instance';
import {ListQueueOptions} from "../types/list-queue-options";

export class ListQueue extends Common {
    constructor(instance: Instance, options: ListQueueOptions) {
        super(instance, options, 'queue');
    }
}