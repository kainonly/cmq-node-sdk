import {Common} from '../common';
import {Instance} from '../types/instance';
import {UnsubscribeOptions} from '../types/unsubscribe-options';

export class Unsubscribe extends Common {
    constructor(instance: Instance, options: UnsubscribeOptions) {
        super(instance, options, 'topic');
    }
}
