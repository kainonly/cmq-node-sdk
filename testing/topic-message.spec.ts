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

describe('Topic Message', function () {
    this.timeout(5000);

    it('Subscribe', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'Beta',
                subscriptionName: 'WithoutTag',
                protocol: 'queue',
                endpoint: 'TestNormal'
            });
            ok(res.code === 0, res.message);
        } catch (e) {
            fail(e);
        }
    });

    it('Tag Subscribe', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'Beta',
                subscriptionName: 'WithTag',
                protocol: 'queue',
                endpoint: 'TestTag',
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
                topicName: 'Beta',
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
                topicName: 'Beta',
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
                topicName: 'Beta',
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
                topicName: 'Beta',
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

    it('Subscribe Router', async () => {
        try {
            const res = await cmq.subscribe({
                topicName: 'BetaRouter',
                subscriptionName: 'Test',
                protocol: 'queue',
                endpoint: 'Normal',
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
                topicName: 'BetaRouter',
                subscriptionName: 'TestKey',
                protocol: 'queue',
                endpoint: 'Special',
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
                topicName: 'BetaRouter',
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
                topicName: 'BetaRouter',
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
