"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
class ReceiveMessage extends common_1.Common {
    constructor(instance, options) {
        super(instance, options, 'queue');
    }
}
exports.ReceiveMessage = ReceiveMessage;