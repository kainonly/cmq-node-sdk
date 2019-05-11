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

describe('Test Topic', () => {
    it('Create Topic', async () => {
        try {
            const res = await cmq.createTopic({
                topicName: 'test-topic'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Set Topic Attributes', async () => {
        try {
            const res = await cmq.setTopicAttributes({
                topicName: 'test-topic',
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
                topicName: 'test-topic'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Delete Topic', async () => {
        try {
            const res = await cmq.deleteTopic({
                topicName: 'test-topic'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
