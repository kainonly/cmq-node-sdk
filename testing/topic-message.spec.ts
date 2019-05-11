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
    it('Create Topic ', function () {

    });

    it('Subscribe', function () {

    });

    it('Tag Subscribe', function () {

    });

    it('Publish Message', function () {

    });

    it('Tag Publish Message', function () {

    });

    it('Batch Publish Message', function () {

    });

    it('Tag Batch Publish Message', function () {

    });

    it('Create Topic Router Type', function () {

    });

    it('Subscribe Router', function () {

    });

    it('Subscribe RouterKey', function () {

    });

    it('Publish Message Router', function () {

    });

    it('Publish Message RouterKey ', function () {

    });
});
