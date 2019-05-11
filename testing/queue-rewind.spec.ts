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

describe('Test Queue Rewind', () => {
    it('Create Queue', async () => {

    });

    it('Send Message', async () => {

    });

    it('Receive And Delete Message ', async () => {

    });

    it('Rewind Queue', async () => {

    });
});
