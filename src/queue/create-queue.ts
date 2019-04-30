import {CreateQueueOptions} from '../types/create-queue-options';
import {Common} from '../common';
import {Instance} from '../types/instance';

export class CreateQueue extends Common {
    constructor(instance: Instance, options: CreateQueueOptions) {
        super(instance, options, 'queue');
    }
}
