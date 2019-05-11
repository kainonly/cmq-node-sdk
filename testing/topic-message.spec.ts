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

    });

    it('Subscribe', async () => {

    });

    it('Tag Subscribe', async () => {

    });

    it('Publish Message', async () => {

    });

    it('Tag Publish Message', async () => {

    });

    it('Batch Publish Message', async () => {

    });

    it('Tag Batch Publish Message', async () => {

    });

    it('Create Topic Router Type', async () => {

    });

    it('Subscribe Router', async () => {

    });

    it('Subscribe RouterKey', async () => {

    });

    it('Publish Message Router', async () => {

    });

    it('Publish Message RouterKey ', async () => {

    });
});
