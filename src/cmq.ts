import { Instance } from './types/instance';
import { Client } from './client';

const CMQ = {
  /**
   * 创建 CMQ 客户端
   */
  NEW(instance: Instance) {
    return new Client(instance);
  },
};

export { CMQ };

