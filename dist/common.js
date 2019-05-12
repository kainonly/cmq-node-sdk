"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request"));
const crypto_1 = require("crypto");
const util_1 = require("util");
class Common {
    /**
     * 请求客户端
     */
    constructor(instance, options, type) {
        this.instance = instance;
        this.options = options;
        this.type = type;
        /**
         * 请求方式
         */
        this.method = 'POST';
        options.SignatureMethod = instance.signatureMethod;
        options.SecretId = instance.secretId;
        options.Region = instance.region;
        if (instance.extranet) {
            this.protocol = 'https://';
            this.uri = `cmq-${type}-${options.Region}.api.qcloud.com`;
        }
        else {
            this.protocol = 'http://';
            this.uri = `cmq-${type}-${options.Region}.api.tencentyun.com`;
        }
        this.path = instance.path;
    }
    /**
     * 获取请求部分签名参数
     */
    getSignRequest() {
        return this.method + this.uri + this.path;
    }
    /**
     * 生成参数
     */
    getArgs() {
        const args = {};
        const vars = this.options;
        const keys = Object.keys(this.options).sort();
        for (const key of keys) {
            if (!vars[key]) {
                continue;
            }
            if (util_1.isArray(args[key])) {
                for (const k in args[key]) {
                    if (args[key].hasOwnProperty(k)) {
                        args[key + '.' + k] = args[key][k];
                    }
                }
            }
            else {
                args[key] = vars[key];
            }
        }
        return args;
    }
    /**
     * 签名参数
     */
    getSignParams() {
        const operates = [];
        const args = this.getArgs();
        for (const key in args) {
            if (!args.hasOwnProperty(key))
                continue;
            operates.push(key + '=' + args[key]);
        }
        return this.getSignRequest() + '?' + operates.join('&');
    }
    /**
     * 生成签名
     */
    factorySignature(param) {
        let method;
        switch (this.instance.signatureMethod) {
            case 'HmacSHA1':
                method = 'sha1';
                break;
            case 'HmacSHA256':
                method = 'sha256';
                break;
        }
        return Buffer.from(crypto_1.createHmac(method, this.instance.secretKey)
            .update(param)
            .digest()).toString('base64');
    }
    /**
     * 发起请求
     */
    result() {
        this.options.Nonce = parseInt((Math.random() * 10000).toString());
        this.options.Timestamp = parseInt((new Date().getTime() / 1000).toString());
        this.options.Signature = this.factorySignature(this.getSignParams());
        const args = this.getArgs();
        return new Promise((resolve, reject) => {
            request.post(this.protocol + this.uri + this.path, {
                timeout: 2000,
                form: args
            }, (error, response, body) => {
                try {
                    if (error)
                        reject(error);
                    else
                        resolve(JSON.parse(body));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
}
exports.Common = Common;
