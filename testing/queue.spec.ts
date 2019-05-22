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

describe('Queue', function () {
    this.timeout(5000);

    it('Create Test Queue', async () => {
        try {
            const res = await cmq.createQueue({
                queueName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Create SendTest Queue', async () => {
        try {
            const res = await cmq.createQueue({
                queueName: 'SendTest',
                rewindSeconds: 60,
                maxMsgHeapNum: 1000000
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Create RewindTest Queue', async () => {
        try {
            const res = await cmq.createQueue({
                queueName: 'RewindTest',
                maxMsgHeapNum: 1000000,
                rewindSeconds: 3600
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('List Queue', async () => {
        try {
            const res = await cmq.listQueue({});
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Get Queue Attributes ', async () => {
        try {
            const res = await cmq.getQueueAttributes({
                queueName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Set Queue Attributes', async () => {
        try {
            const res = await cmq.setQueueAttributes({
                queueName: 'Test',
                maxMsgHeapNum: 5000000
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Delete Queue', async () => {
        try {
            const res = await cmq.deleteQueue({
                queueName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
