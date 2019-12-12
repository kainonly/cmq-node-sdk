import { Instance } from './types/instance';
import { Client } from './client';

const CMQ = {
  /**
   * 配置客户端
   */
  NEW(instance: Instance) {
    return new Client(instance);
  },
};

export { CMQ };

