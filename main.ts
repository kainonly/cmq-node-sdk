import {config} from 'dotenv';
import {CMQ} from './src/cmq';

const env = config().parsed;

const cmq = CMQ.Configure({
  path: '/v2/index.php',
  signatureMethod: 'HmacSHA256',
  extranet: true,
  secretId: env.secretId,
  secretKey: env.secretKey,
  region: 'gz'
});

cmq.queue().CreateQueue('test');
