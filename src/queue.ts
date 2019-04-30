import {Instance} from './types/instance';
import {CreateQueue} from './queue/create-queue';

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
        const action = new CreateQueue(this.instance, {
            Action: 'CreateQueue',
            queueName,
            maxMsgHeapNum,
            pollingWaitSeconds,
            visibilityTimeout,
            maxMsgSize,
            msgRetentionSeconds,
            rewindSeconds
        });
        return action.result();
    }
}
