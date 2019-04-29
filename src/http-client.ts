import * as client from 'request-promise';
import {RequestPromiseAPI} from 'request-promise';
import {Instance} from './instance';

export class HttpClient {
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
    private client: RequestPromiseAPI;

    constructor(instance: Instance, type = 'queue') {
        const region = instance.region;
        if (instance.extranet) {
            this.protocol = 'https://';
            this.uri = `cmq-${type}-${region}.api.qcloud.com`;
        } else {
            this.protocol = 'http://';
            this.uri = `cmq-${type}-${region}.api.tencentyun.com`;
        }
        this.path = instance.path;
        this.client = client.defaults({
            baseUrl: this.protocol + this.uri,
            timeout: 2.0
        });
    }

    /**
     * 获取请求部分签名参数
     */
    getSignRequest() {
        return this.method + this.uri + this.path;
    }

    /**
     * 发起请求
     * @param body
     */
    req(body: any) {
        return this.client.post(this.path, {
            formData: body
        });
    }
}
