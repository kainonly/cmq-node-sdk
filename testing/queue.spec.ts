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

describe('Test Queue Operate', () => {
    it('Create Queue', async () => {
        try {
            const res = await cmq.createQueue({
                queueName: 'test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('List Queue', async function () {
        try {
            const res = await cmq.listQueue({});
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
