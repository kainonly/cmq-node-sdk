/**
 * 公共响应
 */
export interface CommonResponse {
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

  /**
   * 扩充字段
   */
  [key: string]: any;
}
