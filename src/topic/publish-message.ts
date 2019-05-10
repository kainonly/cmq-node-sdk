import {Common} from '../common';
import {Instance} from '../types/instance';
import {PublishMessageOptions} from '../types/publish-message-options';

export class PublishMessage extends Common {
    constructor(instance: Instance, options: PublishMessageOptions) {
        super(instance, options, 'topic');
    }
}
