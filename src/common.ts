import * as client from 'request-promise';
import {RequestPromise, RequestPromiseAPI} from 'request-promise';
import {Instance} from './types/instance';
import {CommonOptions} from './types/common-options';
import {createHmac} from 'crypto';
import * as requestPromise from 'request-promise';

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
  private req(body: any): client.RequestPromise {
    return this.httpClient.post(this.path, {
      formData: body
    });
  }

  /**
   * 生成参数
   */
  private getArgs(): any {
    const args: any = {};
    const vars: any = this.options;
    const keys = Object.keys(this.options).sort((a, b) =>
        a.toUpperCase() > b.toUpperCase() ? 1 : -1
    );
    for (const key of keys) {
      if (!vars[key]) {
        continue;
      }

      if (typeof args[key] === 'object') {
        for (const k in args[key]) {
          if (args[key].hasOwnProperty(k)) {
            args[key + '.' + k] = args[key][k];
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
        .digest('hex')
    ).toString('base64');
  }

  /**
   * 发起请求
   */
  result(): RequestPromise {
    this.options.Nonce = parseInt((Math.random() * 10000).toFixed(0));
    this.options.Timestamp = parseInt((new Date().getTime() / 1000).toFixed(0));
    const param = this.getSignParams();
    this.options.Signature = this.factorySignature(this.getSignParams());
    return requestPromise.post(this.protocol + this.uri + this.path, {
      timeout: 2000,
      form: this.getArgs()
    });
  }
}
