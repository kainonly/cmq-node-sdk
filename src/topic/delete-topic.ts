import {Common} from "../common";
import {Instance} from "../types/instance";
import {DeleteTopicOptions} from "../types/delete-topic-options";

export class DeleteTopic extends Common {
    constructor(instance: Instance, options: DeleteTopicOptions) {
        super(instance, options, 'topic');
    }
}
