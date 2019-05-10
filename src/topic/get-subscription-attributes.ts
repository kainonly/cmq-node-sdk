import {Common} from '../common';
import {Instance} from '../types/instance';
import {GetSubscriptionAttributesOptions} from '../types/get-subscription-attributes-options';

export class GetSubscriptionAttributes extends Common {
    constructor(instance: Instance, options: GetSubscriptionAttributesOptions) {
        super(instance, options, 'topic');
    }
}
