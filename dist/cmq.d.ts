import { Instance } from './types/instance';
import { Client } from './client';
declare const CMQ: {
    NEW(instance: Instance): Client;
};
export { CMQ };
