import { Dto, Options, SendMessageDto, SendMessageResult } from './types';
export declare class CMQ {
    private options;
    /**
     * 请求协议
     */
    private readonly protocol;
    /**
     * 请求固定路径
     */
    private readonly path;
    constructor(options: Options);
    /**
     * 发起数据流请求
     */
    send<T, R>(dto: T & Dto): Promise<R>;
    sendMessage(dto: SendMessageDto): Promise<SendMessageResult>;
}
