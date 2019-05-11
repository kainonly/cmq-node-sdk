import { CommonOptions } from "../common-options";
export interface DeleteQueueOptions extends CommonOptions {
    /**
     * 队列名字
     */
    queueName: string;
}
