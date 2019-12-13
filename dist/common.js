"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const got_1 = require("got");
class Common {
    constructor(instance, options, type) {
        this.instance = instance;
        this.options = options;
        this.type = type;
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
    getSignRequest() {
        return this.method + this.uri + this.path;
    }
    getArgs() {
        const args = {};
        const vars = this.options;
        const keys = Object.keys(this.options).sort();
        for (const key of keys) {
            if (!vars[key]) {
                continue;
            }
            if (Array.isArray(vars[key])) {
                for (const k in vars[key]) {
                    if (vars[key].hasOwnProperty(k)) {
                        args[key + '.' + k] = vars[key][k];
                    }
                }
            }
            else {
                args[key] = vars[key];
            }
        }
        return args;
    }
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
    factorySignature(param) {
        let method;
        switch (this.instance.signatureMethod) {
            case 'HmacSHA1':
                method = 'sha1';
                break;
            case 'HmacSHA256':
                method = 'sha256';
                break;
            default:
                method = 'sha1';
        }
        const hmac = crypto_1.createHmac(method, this.instance.secretKey)
            .update(param)
            .digest();
        return Buffer
            .from(hmac)
            .toString('base64');
    }
    send() {
        this.options.Nonce = Math.floor(Math.random() * 10000);
        this.options.Timestamp = Math.floor(new Date().getTime() / 1000);
        const params = this.getSignParams();
        this.options.Signature = this.factorySignature(params);
        const args = this.getArgs();
        let timeout = 2000;
        if (args.pollingWaitSeconds) {
            timeout = args.pollingWaitSeconds * 1000 + 1000;
        }
        return got_1.default.post(this.protocol + this.uri + this.path, {
            form: args,
            timeout,
        }).json();
    }
}
exports.Common = Common;
