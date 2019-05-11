import { CommonOptions } from '../common-options';
export interface PublishMessageOptions extends CommonOptions {
    /**
     * 主题名字
     */
    topicName: string;
    /**
     * 消息正文
     */
    msgBody: any;
    /**
     * 消息过滤标签。消息标签（用于消息过滤)
     */
    msgTag?: string[];
    /**
     * 发送消息的路由路径
     */
    routingKey?: string;
}
