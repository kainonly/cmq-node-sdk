import { CommonOptions } from '../common-options';
export interface GetQueueAttributesOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
}
