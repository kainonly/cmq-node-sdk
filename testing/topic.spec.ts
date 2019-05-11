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

    });

    it('Set Topic Attributes', async () => {

    });

    it('List Topic', async () => {

    });

    it('Get Topic Attributes', async () => {

    });

    it('Delete Topic', async () => {

    });
});
