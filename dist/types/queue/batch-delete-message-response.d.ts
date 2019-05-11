import { CommonResponse } from "../common-response";
export interface BatchDeleteMessageResponse extends CommonResponse {
    /**
     * 无法成功删除的错误列表
     */
    errorList: {
        /**
         * 公共错误码
         */
        code: number;
        /**
         * 错误提示信息
         */
        message: string;
        /**
         * 对应删除失败的消息句柄
         */
        receiptHandle: string;
    }[];
}
