import {Common} from '../common';
import {Instance} from '../types/instance';
import {ListSubscriptionByTopicOptions} from '../types/list-subscription-by-topic-options';

export class ListSubscriptionByTopic extends Common {
    constructor(instance: Instance, options: ListSubscriptionByTopicOptions) {
        super(instance, options, 'topic');
    }
}
