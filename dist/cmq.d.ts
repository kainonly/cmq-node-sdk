import { Instance } from './types/instance';
import { Queue } from './queue';
import { Topic } from "./topic";
export declare namespace CMQ {
    /**
     * 配置客户端
     * @param instance 实例配置
     * @constructor
     */
    function Configure(instance: Instance): Client;
    class Client {
        private instance;
        constructor(instance: Instance);
        /**
         * 初始化队列操作
         */
        queue(): Queue;
        /**
         * 初始化主题操作
         */
        topic(): Topic;
    }
}
