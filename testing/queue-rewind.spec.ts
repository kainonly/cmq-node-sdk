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
        try {
            const res = await cmq.createQueue({
                queueName: 'beta',
                maxMsgHeapNum: 1000000,
                rewindSeconds: 3600
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Send Message', async () => {
        try {
            const res = await cmq.sendMessage({
                queueName: 'beta',
                msgBody: {
                    name: 'kain'
                }
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Receive And Delete Message ', async () => {
        try {
            const res1 = await cmq.receiveMessage({
                queueName: 'beta'
            });
            if (res1.code !== 0) fail(res1.message);
            const res2 = await cmq.deleteMessage({
                queueName: 'beta',
                receiptHandle: res1.receiptHandle
            });
            ok(res2.code === 0, res2.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Rewind Queue', async () => {
        try {
            const time = parseInt((new Date().getTime() / 1000).toString());
            const res = await cmq.rewindQueue({
                queueName: 'beta',
                startConsumeTime: time - 1800
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
