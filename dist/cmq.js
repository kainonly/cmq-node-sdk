"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const CMQ = {
    NEW(instance) {
        return new client_1.Client(instance);
    },
};
exports.CMQ = CMQ;
