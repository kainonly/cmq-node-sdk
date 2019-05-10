import {Instance} from './types/instance';
import {Common} from './common';
import {CommonOptions} from './types/common-options';
import {CreateQueueOptions} from './types/create-queue-options';
import {ListQueueOptions} from './types/list-queue-options';
import {GetQueueAttributesOptions} from './types/get-queue-attributes-options';
import {SetQueueAttributesOptions} from './types/set-queue-attributes-options';
import {DeleteQueueOptions} from './types/delete-queue-options';
import {RewindQueueOptions} from './types/rewind-queue-options';
import {SendMessageOptions} from './types/send-message-options';
import {BatchSendMessageOptions} from './types/batch-send-message-options';
import {ReceiveMessageOptions} from './types/receive-message-options';
import {BatchReceiveMessageOptions} from './types/batch-receive-message-options';
import {DeleteMessageOptions} from './types/delete-message-options';
import {BatchDeleteMessageOptions} from './types/batch-delete-message-options';

export namespace CMQ {
    /**
     * 配置客户端
     * @param instance 实例配置
     * @constructor
     */
    export function NEW(instance: Instance) {
        return new Client(instance);
    }

    /**
     * 定义请求服务
     * @param action 执行名称
     * @param type 类型
     * @constructor
     */
    function Service(action: string, type: string) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.value = function (options: CommonOptions) {
                options.Action = action;
                return new Common(this.instance, options, type).result();
            }
        };
    }

    /**
     * CMQ客户端
     */
    class Client {
        constructor(private instance: Instance) {
        }

        /**
         * 创建队列
         * @param options
         */
        @Service('CreateQueue', 'queue')
        createQueue(options: CreateQueueOptions): Promise<any> {
            return;
        }

        /**
         * 获取队列列表
         * @param options
         */
        @Service('ListQueue', 'queue')
        listQueue(options: ListQueueOptions): Promise<any> {
            return;
        }

        /**
         * 获取队列属性
         * @param options
         * @constructor
         */
        @Service('GetQueueAttributes', 'queue')
        getQueueAttributes(options: GetQueueAttributesOptions) {
            return;
        }

        /**
         * 修改队列属性
         * @param options
         * @constructor
         */
        @Service('SetQueueAttributes', 'queue')
        setQueueAttributes(options: SetQueueAttributesOptions) {
            return;
        }

        /**
         * 删除队列
         * @param options
         * @constructor
         */
        @Service('DeleteQueue', 'queue')
        deleteQueue(options: DeleteQueueOptions) {
            return;
        }

        /**
         * 回溯队列
         * @param options
         * @constructor
         */
        @Service('RewindQueue', 'queue')
        rewindQueue(options: RewindQueueOptions) {
            return;
        }

        /**
         * 发送消息
         * @param options
         * @constructor
         */
        @Service('SendMessage', 'queue')
        sendMessage(options: SendMessageOptions) {
            return;
        }

        /**
         * 批量发送消息
         * @param options
         * @constructor
         */
        @Service('BatchSendMessage', 'queue')
        batchSendMessage(options: BatchSendMessageOptions) {
            return;
        }

        /**
         * 消费消息
         * @param options
         * @constructor
         */
        @Service('ReceiveMessage', 'queue')
        receiveMessage(options: ReceiveMessageOptions) {
            return;
        }

        /**
         * 批量消费消息
         * @param options
         * @constructor
         */
        @Service('BatchReceiveMessage', 'queue')
        batchReceiveMessage(options: BatchReceiveMessageOptions) {
            return;
        }

        /**
         * 删除消息
         * @param options
         * @constructor
         */
        @Service('DeleteMessage', 'queue')
        deleteMessage(options: DeleteMessageOptions) {
            return;
        }

        /**
         * 批量删除消息
         * @param options
         * @constructor
         */
        @Service('BatchDeleteQueue', 'queue')
        batchDeleteQueue(options: BatchDeleteMessageOptions) {
            return;
        }
    }
}
