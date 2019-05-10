import {Common} from '../common';
import {Instance} from '../types/instance';
import {BatchPublishMessageOptions} from '../types/batch-publish-message-options';

export class BatchPublishMessage extends Common {
    constructor(instance: Instance, options: BatchPublishMessageOptions) {
        super(instance, options, 'topic');
    }
}
