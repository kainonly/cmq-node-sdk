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

describe('Test Topic Subscribe', () => {
    it('Create Topic', async () => {
        try {
            const res = await cmq.createTopic({
                topicName: 'sub-topic'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Subscribe', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'sub-topic',
                subscriptionName: 'test',
                protocol: 'queue',
                endpoint: 'normal',
                filterTag: ['mytag']
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('List Subscription By Topic', async () => {
        try {
            const res = await cmq.listSubscriptionByTopic({
                topicName: 'sub-topic'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Set Subscription Attributes', async () => {
        try {
            const res = await cmq.setSubscriptionAttributes({
                topicName: 'sub-topic',
                subscriptionName: 'test',
                notifyStrategy: 'BACKOFF_RETRY'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Unsubscribe', async () => {
        try {
            const res = await cmq.unsubscribe({
                topicName: 'sub-topic',
                subscriptionName: 'test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Get Subscription Attributes', async () => {
        try {
            const res = await cmq.getSubscriptionAttributes({
                topicName: 'sub-topic',
                subscriptionName: 'test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Clear Subscription Filter Tags', async () => {
        try {
            const res = await cmq.clearSubscriptionFilterTags({
                topicName: 'sub-topic',
                subscriptionName: 'test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
