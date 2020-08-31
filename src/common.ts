import { createHmac } from 'crypto';
import { Instance } from './types/instance';
import { CommonOptions } from './types/common-options';
import got, { CancelableRequest } from 'got';
import { performance } from 'perf_hooks';

/**
 * 公共处理类
 */
export class Common {
  /**
   * 请求方式
   */
  private readonly method = 'POST';

  /**
   * 请求地址
   */
  private readonly uri: string;

  /**
   * 请求固定路径
   */
  private readonly path: string;

  /**
   * 请求协议
   */
  private readonly protocol: string;

  /**
   * 公共配置初始化
   * @param instance
   * @param options
   * @param type
   */
  constructor(
    private instance: Instance,
    private options: CommonOptions,
    private type: string,
  ) {
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
    for (const key in vars) {
      if (vars.hasOwnProperty(key)) {
        if (Array.isArray(vars[key])) {
          for (const k in vars[key]) {
            if (vars[key].hasOwnProperty(k)) {
              args[key + '.' + k] = vars[key][k];
            }
          }
        } else {
          args[key] = vars[key];
        }
      }
    }
    return args;
  }

  /**
   * 签名参数
   */
  private getSignParams(): string {
    const operates: string[] = [];
    const args = this.getArgs();
    const keys = Object.keys(args).sort();
    for (const key of keys) {
      if (args.hasOwnProperty(key)) {
        operates.push(key.replace(/\_/g, '.') + '=' + args[key]);
      }
    }
    return this.getSignRequest() + '?' + operates.join('&');
  }

  /**
   * 生成签名
   */
  private factorySignature(param: any): string {
    let method: string;
    switch (this.instance.signatureMethod) {
      case 'HmacSHA1':
        method = 'sha1';
        break;
      case 'HmacSHA256':
        method = 'sha256';
        break;
    }
    const hmac = createHmac(method, this.instance.secretKey)
      .update(param)
      .digest();
    return Buffer
      .from(hmac)
      .toString('base64');
  }

  /**
   * 发起请求
   */
  send(): CancelableRequest<any> {
    this.options.Nonce = Math.random() * 10000 >> 0;
    this.options.Timestamp = (performance.timeOrigin + performance.now()) / 1000 >> 0;
    this.options.Signature = this.factorySignature(this.getSignParams());
    const args = this.getArgs();
    let timeout = 10000;
    if (args.pollingWaitSeconds) {
      timeout = args.pollingWaitSeconds * 1000 + 1000;
    }
    return got.post(this.protocol + this.uri + this.path, {
      form: args,
      timeout,
    }).json();
  }
}
