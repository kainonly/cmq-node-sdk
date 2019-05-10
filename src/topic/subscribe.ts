import {Common} from '../common';
import {Instance} from '../types/instance';
import {SubscribeOptions} from '../types/subscribe-options';

export class Subscribe extends Common {
    constructor(instance: Instance, options: SubscribeOptions) {
        super(instance, options, 'topic');
    }
}
