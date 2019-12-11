import * as request from 'request';
import {createHmac} from 'crypto';
import {Instance} from './types/instance';
import {CommonOptions} from './types/common-options';
import {isArray} from 'util';

export class Common {
    /**
     * 请求方式
     */
    private method = 'POST';

    /**
     * 请求地址
     */
    private uri: string;

    /**
     * 请求固定路径
     */
    private path: string;

    /**
     * 请求协议
     */
    private protocol: string;

    /**
     * 请求客户端
     */

    constructor(private instance: Instance,
                private options: CommonOptions,
                private type: string) {
        options.SignatureMethod = instance.signatureMethod;
        options.SecretId = instance.secretId;
        options.Region = instance.region;
        if (instance.extranet) {
            this.protocol = 'https://';
            this.uri = `cmq-${type}-${options.Region}.api.qcloud.com`;
        } else {
            this.protocol = 'http://';
            this.uri = `cmq-${type}-${options.Region}.api.tencentyun.com`;
        }
        this.path = instance.path;
    }

    /**
     * 获取请求部分签名参数
     */
    private getSignRequest() {
        return this.method + this.uri + this.path;
    }

    /**
     * 生成参数
     */
    private getArgs(): any {
        const args: any = {};
        const vars: any = this.options;
        const keys = Object.keys(this.options).sort();
        for (const key of keys) {
            if (!vars[key]) {
                continue;
            }
            if (isArray(vars[key])) {
                for (const k in vars[key]) {
                    if (vars[key].hasOwnProperty(k)) {
                        args[key + '.' + k] = vars[key][k];
                    }
                }
            } else {
                args[key] = vars[key];
            }
        }
        return args;
    }

    /**
     * 签名参数
     */
    private getSignParams(): string {
        const operates = [];
        const args = this.getArgs();
        for (const key in args) {
            if (!args.hasOwnProperty(key)) continue;
            operates.push(key + '=' + args[key]);
        }
        return this.getSignRequest() + '?' + operates.join('&');
    }

    /**
     * 生成签名
     */
    private factorySignature(param: any): string {
        let method;
        switch (this.instance.signatureMethod) {
            case 'HmacSHA1':
                method = 'sha1';
                break;
            case 'HmacSHA256':
                method = 'sha256';
                break;
        }
        return Buffer.from(createHmac(method, this.instance.secretKey)
            .update(param)
            .digest()
        ).toString('base64');
    }

    /**
     * 发起请求
     */
    result(): Promise<any> {
        this.options.Nonce = parseInt((Math.random() * 10000).toString());
        this.options.Timestamp = parseInt((new Date().getTime() / 1000).toString());
        const params = this.getSignParams();
        this.options.Signature = this.factorySignature(params);
        const args = this.getArgs();
        return new Promise((resolve, reject) => {
            request.post(this.protocol + this.uri + this.path, 
                timeout: (args.pollingWaitSeconds) ? args.pollingWaitSeconds * 1000 + 1000 : 2000,
                form: args
            }, (error, response, body) => {
                try {
                    if (error) reject(error);
                    else resolve(JSON.parse(body));
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}
