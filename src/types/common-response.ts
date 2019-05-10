export interface CommonResponse {
    /**
     * 未补充字段
     */
    [key: string]: any;

    /**
     * 公共错误码
     */
    code: number;
    /**
     * 错误提示信息
     */
    message: string;
    /**
     * 服务器生成的请求 ID
     */
    requestId: string;
}
