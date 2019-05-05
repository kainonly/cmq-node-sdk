import {Common} from "../common";
import {Instance} from "../types/instance";
import {SetTopicAttributesOptions} from "../types/set-topic-attributes-options";

export class SetTopicAttributes extends Common {
    constructor(instance: Instance, options: SetTopicAttributesOptions) {
        super(instance, options, 'topic');
    }
}
