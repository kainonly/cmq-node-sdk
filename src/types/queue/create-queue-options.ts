import {CommonOptions} from '../common-options';

export interface CreateQueueOptions extends CommonOptions {
    queueName: string;
    maxMsgHeapNum?: number;
    pollingWaitSeconds?: number;
    visibilityTimeout?: number;
    maxMsgSize?: number;
    msgRetentionSeconds?: number;
    rewindSeconds?: number;
}
