"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMQ = void 0;
const client_1 = require("./client");
const CMQ = {
    /**
     * 创建 CMQ 客户端
     */
    NEW(instance) {
        return new client_1.Client(instance);
    },
};
exports.CMQ = CMQ;
