import { Instance } from './types/instance';
import { Client } from './client';
declare const CMQ: {
    /**
     * 创建 CMQ 客户端
     */
    NEW(instance: Instance): Client;
};
export { CMQ };
