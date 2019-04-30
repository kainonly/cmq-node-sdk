export interface CommonOptions {
    /**
     * 具体操作的指令接口名称
     */
    Action: string;

    /**
     * 地域参数，用来标识希望操作哪个地域的实例。
     */
    Region?: string;

    /**
     * 当前 UNIX 时间戳，可记录发起 API 请求的时间
     */
    Timestamp?: number;

    /**
     * 随机正整数，与 Timestamp 联合起来， 用于防止重放攻击
     */
    Nonce?: number;

    /**
     * 在 云API密钥 上申请的标识身份的 SecretId
     */
    SecretId?: string;

    /**
     * 请求签名，用来验证此次请求的合法性，需要用户根据实际的输入参数计算得出
     */
    Signature?: string;

    /**
     * 签名方式，目前支持 HmacSHA256 和 HmacSHA1
     */
    SignatureMethod?: string;

    /**
     * 临时证书所用的 Token，需要结合临时密钥一起使用
     */
    Token?: string;
}
