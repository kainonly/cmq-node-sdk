import {Instance} from './types/instance';
import {CreateQueue} from './queue/create-queue';
import {ListQueue} from "./queue/list-queue";
import {GetQueueAttributes} from "./queue/get-queue-attributes";
import {SetQueueAttributes} from "./queue/set-queue-attributes";
import {DeleteQueue} from "./queue/delete-queue";
import {RewindQueue} from "./queue/rewind-queue";
import {SendMessage} from "./queue/send-message";
import {BatchSendMessage} from "./queue/batch-send-message";
import {ReceiveMessage} from "./queue/receive-message";
import {BatchReceiveMessage} from "./queue/batch-receive-message";
import {DeleteMessage} from "./queue/delete-message";
import {BatchDeleteQueue} from "./queue/batch-delete-queue";

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
     * @param searchWord 用于过滤队列列表，后台用模糊匹配的方式来返回符合条件的队列列表
     * @param offset 分页时本页获取队列列表的起始位置
     * @param limit 分页时本页获取队列的个数
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
     * @param queueName 队列名称
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
     * @param queueName 队列名称
     * @param maxMsgHeapNum 最大堆积消息数
     * @param pollingWaitSeconds 消息接收长轮询等待时间
     * @param visibilityTimeout 消息可见性超时
     * @param maxMsgSize 消息最大长度
     * @param msgRetentionSeconds 消息保留周期
     * @param rewindSeconds 队列是否开启回溯消息能力
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
     * @param queueName 队列名称
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
     * @param queueName 队列名称
     * @param startConsumeTime 生产消息的先后顺序消费该时间戳以后的消息
     * @constructor
     */
    RewindQueue(queueName: string, startConsumeTime: number) {
        return new RewindQueue(this.instance, {
            Action: 'RewindQueue',
            queueName,
            startConsumeTime
        })
    }

    /**
     * 发送消息
     * @param queueName 队列名称
     * @param msgBody 消息正文
     * @param delaySeconds 需要延时多久用户才可见该消息
     * @constructor
     */
    SendMessage(queueName: string, msgBody: any, delaySeconds: number) {
        return new SendMessage(this.instance, {
            Action: 'SendMessage',
            queueName,
            msgBody,
            delaySeconds
        });
    }

    /**
     * 批量发送消息
     * @param queueName 队列名称
     * @param msgBody 消息正文
     * @param delaySeconds 需要延时多久用户才可见该消息
     * @constructor
     */
    BatchSendMessage(queueName: string, msgBody: any, delaySeconds?: number) {
        return new BatchSendMessage(this.instance, {
            Action: 'BatchSendMessage',
            queueName,
            msgBody,
            delaySeconds
        });
    }

    /**
     * 消费消息
     * @param queueName 队列名称
     * @param pollingWaitSeconds 本次请求的长轮询等待时间
     * @constructor
     */
    ReceiveMessage(queueName: string, pollingWaitSeconds?: number) {
        return new ReceiveMessage(this.instance, {
            Action: 'ReceiveMessage',
            queueName,
            pollingWaitSeconds
        });
    }

    /**
     * 批量消费消息
     * @param queueName 队列名称
     * @param numOfMsg 本次消费的消息数量
     * @param pollingWaitSeconds 本次请求的长轮询等待时间
     * @constructor
     */
    BatchReceiveMessage(queueName: string, numOfMsg: number, pollingWaitSeconds?: number) {
        return new BatchReceiveMessage(this.instance, {
            Action: 'BatchReceiveMessage',
            queueName,
            numOfMsg,
            pollingWaitSeconds
        });
    }

    /**
     * 删除消息
     * @param queueName 队列名称
     * @param receiptHandle 上次消费返回唯一的消息句柄，用于删除消息
     * @constructor
     */
    DeleteMessage(queueName: string, receiptHandle: string) {
        return new DeleteMessage(this.instance, {
            Action: 'DeleteMessage',
            queueName,
            receiptHandle
        });
    }

    /**
     * 批量删除消息
     * @param queueName 队列名称
     * @param receiptHandle 上次消费消息时返回的消息句柄
     * @constructor
     */
    BatchDeleteQueue(queueName: string, receiptHandle: any[]) {
        return new BatchDeleteQueue(this.instance, {
            Action: 'BatchDeleteQueue',
            queueName,
            receiptHandle
        });
    }

}
