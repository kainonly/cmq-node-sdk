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
    region: 'bj'
});

describe('Topic', function () {
    this.timeout(5000);

    it('Create Test Topic', async () => {
        try {
            const res = await cmq.createTopic({
                topicName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Create Beta Topic ', async () => {
        try {
            const res = await cmq.createTopic({
                topicName: 'Beta'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Create BetaRouter Topic', async () => {
        try {
            const res = await cmq.createTopic({
                topicName: 'BetaRouter',
                filterType: 2
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Set Topic Attributes', async () => {
        try {
            const res = await cmq.setTopicAttributes({
                topicName: 'Test',
                maxMsgSize: 131072
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('List Topic', async () => {
        try {
            const res = await cmq.listTopic({});
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Get Topic Attributes', async () => {
        try {
            const res = await cmq.getTopicAttributes({
                topicName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Delete Topic', async () => {
        try {
            const res = await cmq.deleteTopic({
                topicName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
