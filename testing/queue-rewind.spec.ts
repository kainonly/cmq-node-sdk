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

describe('Queue Rewind', () => {
    it('Send Message', async () => {
        try {
            const res = await cmq.sendMessage({
                queueName: 'RewindTest',
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
                queueName: 'RewindTest'
            });
            if (res1.code !== 0) fail(res1.message);
            const res2 = await cmq.deleteMessage({
                queueName: 'RewindTest',
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
                queueName: 'RewindTest',
                startConsumeTime: time - 1800
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
