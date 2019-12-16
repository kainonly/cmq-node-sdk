import { CommonResponse } from '../common-response';
export interface CreateTopicResponse extends CommonResponse {
    /**
     * 主题的唯一标识 ID
     */
    topicId: string;
}
