import {Instance} from './types/instance';
import {Queue} from './queue';

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

        queue() {
            return new Queue(this.instance);
        }
    }
}
