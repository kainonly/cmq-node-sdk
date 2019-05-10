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
    it('CreateQueue', async () => {
        try {
            const res = await cmq.createQueue({
                queueName: 'name'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
