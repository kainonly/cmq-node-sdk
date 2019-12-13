import { CommonResponse } from '../common-response';
export interface ListTopicResponse extends CommonResponse {
    totalCount: number;
    topicList: {
        topicId: string;
        topicName: string;
    }[];
}
