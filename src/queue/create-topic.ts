import {Common} from "../common";
import {Instance} from "../types/instance";
import {CreateTopicOptions} from "../types/create-topic-options";

export class CreateTopic extends Common {
    constructor(instance: Instance, options: CreateTopicOptions) {
        super(instance, options, 'topic');
    }
}
