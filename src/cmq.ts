import {Instance} from './instance';
import {Queue} from './queue';

export class Cmq {
    constructor(private instance: Instance) {
    }

    queue() {
        return new Queue({
            instance: this.instance
        });
    }
}


