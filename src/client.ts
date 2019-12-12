import { Instance } from './types/instance';
import { Common } from './common';
import { CreateQueueOptions } from './types/queue/create-queue-options';
import { CreateQueueResponse } from './types/queue/create-queue-response';

export class Client {
  constructor(
    private instance: Instance,
  ) {
  }

  createQueue(options: CreateQueueOptions): Promise<CreateQueueResponse> {
    options.Action = 'CreateQueue';
    return new Common(this.instance, options, 'queue').result();
  }
}
