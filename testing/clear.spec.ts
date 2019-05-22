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

describe('Clear', function () {
    this.timeout(5000);

    it('Delete SendTest Queue', async () => {
        try {
            const res = await cmq.deleteQueue({
                queueName: 'SendTest'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Delete RewindTest Queue', async () => {
        try {
            const res = await cmq.deleteQueue({
                queueName: 'RewindTest'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Unsubscribe WithoutTag', async () => {
        try {
            const res = await cmq.unsubscribe({
                topicName: 'Beta',
                subscriptionName: 'WithoutTag'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Unsubscribe WithTag', async () => {
        try {
            const res = await cmq.unsubscribe({
                topicName: 'Beta',
                subscriptionName: 'WithTag'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Delete Beta Topic', async () => {
        try {
            const res = await cmq.deleteTopic({
                topicName: 'Beta'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Unsubscribe Test', async () => {
        try {
            const res = await cmq.unsubscribe({
                topicName: 'BetaRouter',
                subscriptionName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Unsubscribe TestKey', async () => {
        try {
            const res = await cmq.unsubscribe({
                topicName: 'BetaRouter',
                subscriptionName: 'TestKey'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Delete BetaRouter Topic', async () => {
        try {
            const res = await cmq.deleteTopic({
                topicName: 'BetaRouter'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Delete BetaRouter Topic', async () => {
        try {
            const res = await cmq.deleteTopic({
                topicName: 'TestSubscribe'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
