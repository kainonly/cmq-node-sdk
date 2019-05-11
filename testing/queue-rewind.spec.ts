import {ok, fail} from 'assert';
import {config} from 'dotenv';
import {CMQ} from '../../cmq-nodejs-sdk';

const env = config().parsed;
const cmq = CMQ.NEW({
    path: '/v2/index.php',
    signatureMethod: 'HmacSHA256',
    extranet: true,
    secretId: env.secretId,
    secretKey: env.secretKey,
    region: 'gz'
});

describe('Test Queue', () => {
    it('Create Queue', function () {

    });

    it('Send Message', function () {

    });

    it('Receive And Delete Message ', function () {

    });

    it('Rewind Queue', function () {

    });
});
