import { Instance } from './types/instance';
import { CommonOptions } from './types/common-options';
export declare class Common {
    private instance;
    private options;
    private type;
    /**
     * 请求方式
     */
    private method;
    /**
     * 请求地址
     */
    private uri;
    /**
     * 请求固定路径
     */
    private path;
    /**
     * 请求协议
     */
    private protocol;
    /**
     * 请求客户端
     */
    constructor(instance: Instance, options: CommonOptions, type: string);
    /**
     * 获取请求部分签名参数
     */
    private getSignRequest;
    /**
     * 生成参数
     */
    private getArgs;
    /**
     * 签名参数
     */
    private getSignParams;
    /**
     * 生成签名
     */
    private factorySignature;
    /**
     * 发起请求
     */
    result(): Promise<any>;
}
