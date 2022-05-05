"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMQ = void 0;
const crypto_1 = require("crypto");
const axios_1 = require("axios");
class CMQ {
    constructor(options) {
        this.options = options;
        if (!options.protocol) {
            this.protocol = 'https://';
        }
        if (!options.path) {
            this.path = '/v2/index.php';
        }
    }
    /**
     * 发起数据流请求
     */
    send(data, config) {
        data.SignatureMethod = 'HmacSHA256';
        data.SecretId = this.options.secretId;
        data.Region = this.options.region;
        data.Nonce = Math.trunc(Math.random() * 10000);
        data.Timestamp = Math.trunc(new Date().getTime() / 1000);
        const params = [];
        for (const key of Object.keys(data).sort()) {
            params.push(`${key.replace(/_/g, '.')}=${Reflect.get(data, key)}`);
        }
        data.Signature = (0, crypto_1.createHmac)('sha256', this.options.secretKey)
            .update(`POST${this.options.host}${this.path}?${params.join('&')}`)
            .digest('base64');
        const payload = new URLSearchParams();
        for (const [key, value] of Object.entries(data)) {
            if (Array.isArray(value)) {
                value.forEach((v, i) => {
                    payload.append(`${key}.${i}`, v);
                });
            }
            else {
                payload.append(key, value);
            }
        }
        return axios_1.default
            .post(this.protocol + this.options.host + this.path, payload, Object.assign({ timeout: 30000 }, config))
            .then(response => response.data);
    }
    /**
     * 发送消息
     * @param data
     */
    sendMessage(data) {
        data.Action = 'SendMessage';
        return this.send(data);
    }
    /**
     * 批量发送消息
     * @param data
     */
    batchSendMessage(data) {
        data.Action = 'BatchSendMessage';
        data.msgBody.forEach((value, index) => {
            Reflect.set(data, `msgBody.${index}`, value);
        });
        delete data.msgBody;
        return this.send(data);
    }
    /**
     * 设置超时
     * @param data
     * @private
     */
    static pollingWaitTime(data) {
        const cfg = {};
        if (data.pollingWaitSeconds) {
            cfg.timeout = (data.pollingWaitSeconds + 1) * 1000;
        }
        return cfg;
    }
    /**
     * 消费消息
     * @param data
     */
    receiveMessage(data) {
        data.Action = 'ReceiveMessage';
        return this.send(data, CMQ.pollingWaitTime(data));
    }
    /**
     * 批量消费消息
     * @param data
     */
    batchReceiveMessage(data) {
        data.Action = 'BatchReceiveMessage';
        return this.send(data, CMQ.pollingWaitTime(data));
    }
    /**
     * 删除消息
     * @param data
     */
    deleteMessage(data) {
        data.Action = 'DeleteMessage';
        return this.send(data);
    }
    /**
     * 批量删除消息
     * @param data
     */
    batchDeleteMessage(data) {
        data.Action = 'BatchDeleteMessage';
        data.receiptHandle.forEach((value, index) => {
            Reflect.set(data, `receiptHandle.${index}`, value);
        });
        delete data.receiptHandle;
        return this.send(data);
    }
    /**
     * 发布消息
     * @param data
     */
    publishMessage(data) {
        data.Action = 'PublishMessage';
        return this.send(data);
    }
    /**
     * 批量发布消息
     * @param data
     */
    batchPublishMessage(data) {
        var _a;
        data.Action = 'BatchPublishMessage';
        data.msgBody.forEach((value, index) => {
            Reflect.set(data, `msgBody.${index}`, value);
        });
        delete data.msgBody;
        (_a = data.msgTag) === null || _a === void 0 ? void 0 : _a.forEach((value, index) => {
            Reflect.set(data, `msgTag.${index}`, value);
        });
        delete data.msgTag;
        return this.send(data);
    }
}
exports.CMQ = CMQ;
//# sourceMappingURL=cmq.js.map