import {Instance} from './instance';
import {Cmq} from './cmq';

export namespace CmqClient {
    /**
     * 配置客户端
     * @param instance 实例配置
     * @constructor
     */
    export function Configure(instance: Instance) {
        return new Cmq(instance);
    }
}
