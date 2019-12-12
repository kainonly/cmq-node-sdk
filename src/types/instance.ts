export interface Instance {
  /**
   * 请求固定路径
   */
  path: string;

  /**
   * 加密算法
   */
  signatureMethod: string;

  /**
   * 是否为外网
   */
  extranet: boolean;

  /**
   * 实例 ID
   */
  secretId: string;

  /**
   * 实例 Key
   */
  secretKey: string;

  /**
   * 区域
   */
  region: string;
}
