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

describe('Topic', () => {
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
