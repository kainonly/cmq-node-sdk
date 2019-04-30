import * as client from 'request-promise';
import {RequestPromiseAPI} from 'request-promise';
import {Instance} from './types/instance';
import {CommonOptions} from './types/common-options';

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
    private httpClient: RequestPromiseAPI;

    constructor(private instance: Instance,
                private options: CommonOptions,
                private type: string) {
        options.Region = instance.region;
        if (instance.extranet) {
            this.protocol = 'https://';
            this.uri = `cmq-${type}-${options.Region}.api.qcloud.com`;
        } else {
            this.protocol = 'http://';
            this.uri = `cmq-${type}-${options.Region}.api.tencentyun.com`;
        }
        this.path = instance.path;
        this.httpClient = client.defaults({
            baseUrl: this.protocol + this.uri,
            timeout: 2.0
        });
    }

    /**
     * 获取请求部分签名参数
     */
    private getSignRequest() {
        return this.method + this.uri + this.path;
    }

    /**
     * 发起请求
     * @param body
     */
    private req(body: any) {
        return this.httpClient.post(this.path, {
            formData: body
        });
    }

    getArgs() {
        console.log(this.options);
    }
}
