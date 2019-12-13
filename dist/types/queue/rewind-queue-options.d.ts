import { CommonOptions } from '../common-options';
export interface RewindQueueOptions extends CommonOptions {
    queueName: string;
    startConsumeTime: number;
}
