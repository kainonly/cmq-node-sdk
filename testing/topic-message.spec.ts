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

describe('Test Topic Message', () => {
    it('Create Topic ', async () => {
        try {
            const res = await cmq.createTopic({
                topicName: 'beta-topic'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Subscribe', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'beta-topic',
                subscriptionName: 'test-without-tag',
                protocol: 'queue',
                endpoint: 'test-normal'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Tag Subscribe', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'beta-topic',
                subscriptionName: 'test-with-tag',
                protocol: 'queue',
                endpoint: 'test-tag',
                filterTag: [
                    'mytag'
                ]
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Publish Message', async () => {
        try {
            const res = await cmq.publishMessage({
                topicName: 'beta-topic',
                msgBody: {
                    name: 'kain'
                }
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Tag Publish Message', async () => {
        try {
            const res = await cmq.publishMessage({
                topicName: 'beta-topic',
                msgBody: {
                    name: 'vvv'
                },
                msgTag: [
                    'mytag'
                ]
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Batch Publish Message', async () => {
        try {
            const res = await cmq.batchPublishMessage({
                topicName: 'beta-topic',
                msgBody: [
                    {type: 'a1', name: '11'},
                    {type: 'a2', name: '22'}
                ]
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Tag Batch Publish Message', async () => {
        try {
            const res = await cmq.batchPublishMessage({
                topicName: 'beta-topic',
                msgBody: [
                    {type: 'a1', name: '11'},
                    {type: 'a2', name: '22'}
                ],
                msgTag: [
                    'mytag'
                ]
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Create Topic Router Type', async () => {
        try {
            const res = await cmq.createTopic({
                topicName: 'router-topic',
                filterType: 2
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Subscribe Router', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'router-topic',
                subscriptionName: 'test',
                protocol: 'queue',
                endpoint: 'normal',
                bindingKey: ['sys.common']
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Subscribe RouterKey', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'router-topic',
                subscriptionName: 'test-key',
                protocol: 'queue',
                endpoint: 'special',
                bindingKey: ['*.common']
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Publish Message Router', async () => {
        try {
            const res = await cmq.publishMessage({
                topicName: 'router-topic',
                msgBody: {
                    name: 'kain'
                },
                routingKey: 'sys.common'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Publish Message RouterKey ', async () => {
        try {
            const res = await cmq.publishMessage({
                topicName: 'router-topic',
                msgBody: {
                    name: '123'
                },
                routingKey: 'app.common'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });
});
