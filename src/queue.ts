import {Instance} from './types/instance';
import {CreateQueue} from './queue/create-queue';
import {ListQueue} from "./queue/list-queue";
import {GetQueueAttributes} from "./queue/get-queue-attributes";

export class Queue {
    constructor(private instance: Instance) {
    }

    CreateQueue(queueName: string,
                maxMsgHeapNum?: number,
                pollingWaitSeconds?: number,
                visibilityTimeout?: number,
                maxMsgSize?: number,
                msgRetentionSeconds?: number,
                rewindSeconds?: number) {
        return new CreateQueue(this.instance, {
            Action: 'CreateQueue',
            queueName,
            maxMsgHeapNum,
            pollingWaitSeconds,
            visibilityTimeout,
            maxMsgSize,
            msgRetentionSeconds,
            rewindSeconds
        }).result();
    }

    ListQueue(searchWord?: string, offset?: number, limit?: number) {
        return new ListQueue(this.instance, {
            Action: 'ListQueue',
            searchWord,
            offset,
            limit
        }).result();
    }

    GetQueueAttributes(queueName: string) {
        return new GetQueueAttributes(this.instance, {
            Action: 'GetQueueAttributes',
            queueName
        });
    }
}
