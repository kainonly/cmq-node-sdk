import {ok, fail} from 'assert';
import {config} from 'dotenv';
import {CMQ} from '../../cmq-nodejs-sdk';

const env = config().parsed;
const cmq = CMQ.Configure({
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
            const res = await cmq.queue().CreateQueue('test');
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
