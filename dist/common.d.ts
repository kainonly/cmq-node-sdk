import { Instance } from './types/instance';
import { CommonOptions } from './types/common-options';
import { CancelableRequest } from 'got';
export declare class Common {
    private instance;
    private options;
    private type;
    private readonly method;
    private readonly uri;
    private readonly path;
    private readonly protocol;
    constructor(instance: Instance, options: CommonOptions, type: string);
    private getSignRequest;
    private getArgs;
    private getSignParams;
    private factorySignature;
    send(): CancelableRequest<any>;
}
