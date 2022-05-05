"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMQ = void 0;
const crypto_1 = require("crypto");
const axios_1 = require("axios");
class CMQ {
    constructor(options) {
        this.options = options;
        if (!options.protocol) {
            this.protocol = 'https://';
        }
        if (!options.path) {
            this.path = '/v2/index.php';
        }
    }
    /**
     * 发起数据流请求
     */
    send(dto) {
        dto.SignatureMethod = 'HmacSHA256';
        dto.SecretId = this.options.secretId;
        dto.Region = this.options.region;
        dto.Nonce = Math.trunc(Math.random() * 10000);
        dto.Timestamp = Math.trunc(new Date().getTime() / 1000);
        const params = [];
        for (const key of Object.keys(dto).sort()) {
            params.push(`${key.replace('_', '.')}=${Reflect.get(dto, key)}`);
        }
        dto.Signature = (0, crypto_1.createHmac)('sha256', this.options.secretKey)
            .update(`POST${this.options.endpoint}${this.path}?${params.join('&')}`)
            .digest('base64');
        const data = new URLSearchParams();
        for (const [key, value] of Object.entries(dto)) {
            if (Array.isArray(value)) {
                value.forEach((v, i) => {
                    data.append(`${key}.${i}`, v);
                });
            }
            else {
                data.append(key, value);
            }
        }
        return axios_1.default.post(this.protocol + this.options.endpoint + this.path, data).then(response => {
            return response.data;
        });
    }
    sendMessage(dto) {
        dto.Action = 'SendMessage';
        return this.send(dto);
    }
}
exports.CMQ = CMQ;
//# sourceMappingURL=cmq.js.map