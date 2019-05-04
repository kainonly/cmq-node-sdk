import {Instance} from './types/instance';
import {Queue} from './queue';
import {Topic} from "./topic";

export namespace CMQ {
    /**
     * 配置客户端
     * @param instance 实例配置
     * @constructor
     */
    export function Configure(instance: Instance) {
        return new Client(instance);
    }

    class Client {
        constructor(private instance: Instance) {
        }

        /**
         * 初始化队列操作
         */
        queue() {
            return new Queue(this.instance);
        }

        /**
         * 初始化主题操作
         */
        topic() {
            return new Topic(this.instance);
        }
    }
}
