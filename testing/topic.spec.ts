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
    it('Create Topic', function () {

    });

    it('Set Topic Attributes', function () {

    });

    it('List Topic', function () {

    });

    it('Get Topic Attributes', function () {

    });

    it('Delete Topic', function () {

    });
});
