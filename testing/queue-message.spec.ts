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

describe('Test Queue Message', () => {
    it('Create Queue ', async () => {
        try {
            const res = await cmq.createQueue({
                queueName: 'send',
                rewindSeconds: 60,
                maxMsgHeapNum: 1000000
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Send Message', async () => {
        try {
            const res = await cmq.sendMessage({
                queueName: 'send',
                msgBody: {
                    name: 'kain'
                }
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Receive Delete Message', async () => {
        try {
            const res1 = await cmq.receiveMessage({
                queueName: 'send'
            });
            if (res1.code !== 0) fail(res1.message);
            const res2 = await cmq.deleteMessage({
                queueName: 'send',
                receiptHandle: res1.receiptHandle
            });
            ok(res2.code === 0, res2.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Batch Send Message', async () => {
        try {
            const res = await cmq.batchSendMessage({
                queueName: 'send',
                msgBody: [
                    {type: 1},
                    {type: 2}
                ]
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Batch Receive Delete Message', async () => {

    });
});
