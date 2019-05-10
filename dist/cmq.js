"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("./queue");
const topic_1 = require("./topic");
var CMQ;
(function (CMQ) {
    /**
     * 配置客户端
     * @param instance 实例配置
     * @constructor
     */
    function Configure(instance) {
        return new Client(instance);
    }
    CMQ.Configure = Configure;
    class Client {
        constructor(instance) {
            this.instance = instance;
        }
        /**
         * 初始化队列操作
         */
        queue() {
            return new queue_1.Queue(this.instance);
        }
        /**
         * 初始化主题操作
         */
        topic() {
            return new topic_1.Topic(this.instance);
        }
    }
})(CMQ = exports.CMQ || (exports.CMQ = {}));
