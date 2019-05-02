import {Instance} from './types/instance';
import {CreateQueue} from './queue/create-queue';
import {ListQueue} from "./queue/list-queue";
import {GetQueueAttributes} from "./queue/get-queue-attributes";
import {SetQueueAttributes} from "./queue/set-queue-attributes";
import {DeleteQueue} from "./queue/delete-queue";
import {RewindQueue} from "./queue/rewind-queue";

export class Queue {
    constructor(private instance: Instance) {
    }

    /**
     * 创建队列
     * @param queueName 队列名称
     * @param maxMsgHeapNum 最大堆积消息数
     * @param pollingWaitSeconds 消息接收长轮询等待时间
     * @param visibilityTimeout 消息可见性超时
     * @param maxMsgSize 消息最大长度
     * @param msgRetentionSeconds 消息保留周期
     * @param rewindSeconds 队列是否开启回溯消息能力
     * @constructor
     */
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

    /**
     * 获取队列列表
     * @param searchWord
     * @param offset
     * @param limit
     * @constructor
     */
    ListQueue(searchWord?: string, offset?: number, limit?: number) {
        return new ListQueue(this.instance, {
            Action: 'ListQueue',
            searchWord,
            offset,
            limit
        }).result();
    }

    /**
     * 获取队列属性
     * @param queueName
     * @constructor
     */
    GetQueueAttributes(queueName: string) {
        return new GetQueueAttributes(this.instance, {
            Action: 'GetQueueAttributes',
            queueName
        });
    }

    /**
     * 修改队列属性
     * @param queueName
     * @param maxMsgHeapNum
     * @param pollingWaitSeconds
     * @param visibilityTimeout
     * @param maxMsgSize
     * @param msgRetentionSeconds
     * @param rewindSeconds
     * @constructor
     */
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

    /**
     * 删除队列
     * @param queueName
     * @constructor
     */
    DeleteQueue(queueName: string) {
        return new DeleteQueue(this.instance, {
            Action: 'DeleteQueue',
            queueName
        });
    }

    /**
     * 回溯队列
     * @param queueName
     * @param startConsumeTime
     * @constructor
     */
    RewindQueue(queueName: string, startConsumeTime: number) {
        return new RewindQueue(this.instance, {
            Action: 'RewindQueue',
            queueName,
            startConsumeTime
        })
    }
}
