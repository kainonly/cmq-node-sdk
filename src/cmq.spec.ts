import { env } from 'process';
import { CMQ } from './';

describe('HTTP 数据流测试', () => {
  let cmq: CMQ;
  beforeAll(() => {
    cmq = new CMQ({
      endpoint: 'cmq-gz.public.tencenttdmq.com',
      secretId: env.SECRETID,
      secretKey: env.SECRETKEY,
      region: env.REGION
    });
  });

  test('向队列发送消息', async () => {
    const response = await cmq.sendMessage({
      queueName: 'dev',
      msgBody: `{"name":"kain"}`
    });
    expect(response.code).toBe(0);
  });
});
