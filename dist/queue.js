"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_queue_1 = require("./queue/create-queue");
const list_queue_1 = require("./queue/list-queue");
const get_queue_attributes_1 = require("./queue/get-queue-attributes");
const set_queue_attributes_1 = require("./queue/set-queue-attributes");
const delete_queue_1 = require("./queue/delete-queue");
const rewind_queue_1 = require("./queue/rewind-queue");
const send_message_1 = require("./queue/send-message");
const batch_send_message_1 = require("./queue/batch-send-message");
const receive_message_1 = require("./queue/receive-message");
const batch_receive_message_1 = require("./queue/batch-receive-message");
const delete_message_1 = require("./queue/delete-message");
const batch_delete_queue_1 = require("./queue/batch-delete-queue");
class Queue {
    constructor(instance) {
        this.instance = instance;
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
    CreateQueue(queueName, maxMsgHeapNum, pollingWaitSeconds, visibilityTimeout, maxMsgSize, msgRetentionSeconds, rewindSeconds) {
        return new create_queue_1.CreateQueue(this.instance, {
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
    ListQueue(searchWord, offset, limit) {
        return new list_queue_1.ListQueue(this.instance, {
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
    GetQueueAttributes(queueName) {
        return new get_queue_attributes_1.GetQueueAttributes(this.instance, {
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
    SetQueueAttributes(queueName, maxMsgHeapNum, pollingWaitSeconds, visibilityTimeout, maxMsgSize, msgRetentionSeconds, rewindSeconds) {
        return new set_queue_attributes_1.SetQueueAttributes(this.instance, {
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
    DeleteQueue(queueName) {
        return new delete_queue_1.DeleteQueue(this.instance, {
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
    RewindQueue(queueName, startConsumeTime) {
        return new rewind_queue_1.RewindQueue(this.instance, {
            Action: 'RewindQueue',
            queueName,
            startConsumeTime
        });
    }
    /**
     * 发送消息
     * @param queueName 队列名称
     * @param msgBody 消息正文
     * @param delaySeconds 需要延时多久用户才可见该消息
     * @constructor
     */
    SendMessage(queueName, msgBody, delaySeconds) {
        return new send_message_1.SendMessage(this.instance, {
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
    BatchSendMessage(queueName, msgBody, delaySeconds) {
        return new batch_send_message_1.BatchSendMessage(this.instance, {
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
    ReceiveMessage(queueName, pollingWaitSeconds) {
        return new receive_message_1.ReceiveMessage(this.instance, {
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
    BatchReceiveMessage(queueName, numOfMsg, pollingWaitSeconds) {
        return new batch_receive_message_1.BatchReceiveMessage(this.instance, {
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
    DeleteMessage(queueName, receiptHandle) {
        return new delete_message_1.DeleteMessage(this.instance, {
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
    BatchDeleteQueue(queueName, receiptHandle) {
        return new batch_delete_queue_1.BatchDeleteQueue(this.instance, {
            Action: 'BatchDeleteQueue',
            queueName,
            receiptHandle
        });
    }
}
exports.Queue = Queue;
