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
    it('Create Topic', () => {

    });

    it('Subscribe', () => {

    });

    it('List Subscription By Topic', () => {

    });

    it('Set Subscription Attributes', () => {

    });

    it('Unsubscribe', () => {

    });

    it('Get Subscription Attributes', () => {

    });

    it('Clear Subscription Filter Tags', () => {

    });
});
