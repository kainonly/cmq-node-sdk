import {Instance} from './types/instance';
import {CreateQueue} from './queue/create-queue';
import {ListQueue} from "./queue/list-queue";
import {GetQueueAttributes} from "./queue/get-queue-attributes";
import {SetQueueAttributes} from "./queue/set-queue-attributes";
import {DeleteQueue} from "./queue/delete-queue";

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

    SetQueueAttributes(queueName: string,
                       maxMsgHeapNum?: number,
                       pollingWaitSeconds?: number,
                       visibilityTimeout?: number,
                       maxMsgSize?: number,
                       msgRetentionSeconds?: number,
                       rewindSeconds?: number) {
        return new SetQueueAttributes(this.instance, {
            Action: 'SetQueueAttributes',
            queueName,
            maxMsgHeapNum,
            pollingWaitSeconds,
            visibilityTimeout,
            maxMsgSize,
            msgRetentionSeconds,
            rewindSeconds
        });
    }

    DeleteQueue(queueName: string) {
        return new DeleteQueue(this.instance, {
            Action: 'DeleteQueue',
            queueName
        });
    }
}
