import { Instance } from './types/instance';
import { CommonOptions } from './types/common-options';
import { CancelableRequest } from 'got';
/**
 * 公共处理类
 */
export declare class Common {
    private instance;
    private options;
    private type;
    /**
     * 请求方式
     */
    private readonly method;
    /**
     * 请求地址
     */
    private readonly uri;
    /**
     * 请求固定路径
     */
    private readonly path;
    /**
     * 请求协议
     */
    private readonly protocol;
    /**
     * 公共配置初始化
     * @param instance
     * @param options
     * @param type
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
    send(): CancelableRequest<any>;
}
