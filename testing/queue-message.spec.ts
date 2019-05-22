import {ok, fail} from 'assert';
import {config} from 'dotenv';
import {env} from 'process';
import {CMQ} from '../../cmq-nodejs-sdk';

let myenv = config().parsed;
if (myenv === undefined) myenv = env;

const cmq = CMQ.NEW({
    path: '/v2/index.php',
    signatureMethod: 'HmacSHA256',
    extranet: true,
    secretId: myenv.secretId,
    secretKey: myenv.secretKey,
    region: 'gz'
});

describe('Queue Message', function () {
    this.timeout(5000);

    it('Send Message', async () => {
        try {
            const res = await cmq.sendMessage({
                queueName: 'SendTest',
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
                queueName: 'SendTest'
            });
            if (res1.code !== 0) fail(res1.message);
            const res2 = await cmq.deleteMessage({
                queueName: 'SendTest',
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
                queueName: 'SendTest',
                msgBody: [
                    {type: 'a1', name: 'cc'},
                    {type: 'a2', name: 'xy'}
                ]
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Batch Receive Delete Message', async () => {
        try {
            const res1 = await cmq.batchReceiveMessage({
                queueName: 'SendTest',
                numOfMsg: 16
            });
            if (res1.code !== 0) fail(res1.message);
            const receiptHandles = res1.msgInfoList.map(v => v.receiptHandle);
            const res2 = await cmq.batchDeleteMessage({
                queueName: 'SendTest',
                receiptHandle: receiptHandles
            });
            ok(res2.code === 0, res2.message);
        } catch (e) {
            fail(e);
        }
    });
});
