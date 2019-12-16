import { CommonOptions } from '../common-options';
export interface BatchPublishMessageOptions extends CommonOptions {
    /**
     * 主题名字
     */
    topicName: string;
    /**
     * 消息正文。表示这一批量中的一条消息
     */
    msgBody: string[];
    /**
     * 消息过滤标签。消息标签（用于消息过滤)
     */
    msgTag?: string[];
    /**
     * 送消息的路由路径
     */
    routingKey?: string;
}
