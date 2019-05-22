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

describe('Topic Subscribe', function () {
    this.timeout(5000);

    it('Create TestSubscribe Topic', async () => {
        try {
            const res = await cmq.createTopic({
                topicName: 'TestSubscribe'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Subscribe', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'TestSubscribe',
                subscriptionName: 'Test',
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
                topicName: 'TestSubscribe'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Set Subscription Attributes', async () => {
        try {
            const res = await cmq.setSubscriptionAttributes({
                topicName: 'TestSubscribe',
                subscriptionName: 'Test',
                notifyStrategy: 'BACKOFF_RETRY'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Get Subscription Attributes', async () => {
        try {
            const res = await cmq.getSubscriptionAttributes({
                topicName: 'TestSubscribe',
                subscriptionName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Clear Subscription Filter Tags', async () => {
        try {
            const res = await cmq.clearSubscriptionFilterTags({
                topicName: 'TestSubscribe',
                subscriptionName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Unsubscribe', async () => {
        try {
            const res = await cmq.unsubscribe({
                topicName: 'TestSubscribe',
                subscriptionName: 'Test'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
