import {Common} from '../common';
import {Instance} from '../types/instance';
import {ClearSubscriptionFilterTagsOptions} from '../types/clear-subscription-filter-tags-options';

export class ClearSubscriptionFilterTags extends Common {
    constructor(instance: Instance, options: ClearSubscriptionFilterTagsOptions) {
        super(instance, options, 'topic');
    }
}
