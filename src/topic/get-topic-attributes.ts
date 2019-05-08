import {Common} from "../common";
import {Instance} from "../types/instance";
import {GetTopicAttributesOptions} from "../types/get-topic-attributes-options";

export class GetTopicAttributes extends Common {
    constructor(instance: Instance, options: GetTopicAttributesOptions) {
        super(instance, options, 'topic');
    }
}
