"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
class Unsubscribe extends common_1.Common {
    constructor(instance, options) {
        super(instance, options, 'topic');
    }
}
exports.Unsubscribe = Unsubscribe;
