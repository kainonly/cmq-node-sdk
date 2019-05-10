import {Common} from '../common';
import {Instance} from '../types/instance';
import {SetSubscriptionAttributesOptions} from '../types/set-subscription-attributes-options';

export class SetSubscriptionAttributes extends Common {
    constructor(instance: Instance, options: SetSubscriptionAttributesOptions) {
        super(instance, options, 'topic');
    }
}
