import { env } from 'process';
import { CMQ } from './';

describe('HTTP 数据流测试', () => {
  let client: CMQ;
  beforeAll(() => {
    client = new CMQ({
      host: 'cmq-gz.public.tencenttdmq.com',
      secretId: env.SECRETID,
      secretKey: env.SECRETKEY,
      region: env.REGION
    });
  });

  test('发布消息', async () => {
    const r = await client.sendMessage({
      queueName: 'dev',
      msgBody: `{"msg":"hi"}`
    });
    expect(r.code).toBe(0);
  });

  let receiptHandle: string;

  test('消费消息', async () => {
    const r = await client.receiveMessage({
      queueName: 'dev',
      pollingWaitSeconds: 15
    });
    expect(r.code).toBe(0);
    expect(r.msgBody).toBe(`{"msg":"hi"}`);
    expect(r.receiptHandle).not.toBeNull();
    receiptHandle = r.receiptHandle;
  });

  test('删除消息', async () => {
    const r = await client.deleteMessage({
      queueName: 'dev',
      receiptHandle
    });
    expect(r.code).toBe(0);
  });

  const data: string[] = [];

  test('批量发送消息', async () => {
    for (let i = 0; i < 3; i++) {
      data.push(`{"index":${i}}`);
    }
    const r = await client.batchSendMessage({
      queueName: 'batch-dev',
      msgBody: data
    });
    expect(r.code).toBe(0);
  });

  const receiptHandles: string[] = [];

  test('批量接收消息', async () => {
    const r = await client.batchReceiveMessage({
      queueName: 'batch-dev',
      numOfMsg: 3,
      pollingWaitSeconds: 15
    });
    expect(r.code).toBe(0);
    expect(r.msgInfoList).not.toBeNull();
    r.msgInfoList.forEach(value => {
      expect(data).toContain(value.msgBody);
      receiptHandles.push(value.receiptHandle);
    });
  });

  test('批量删除消息', async () => {
    const r = await client.batchDeleteMessage({
      queueName: 'batch-dev',
      receiptHandle: receiptHandles
    });
    expect(r.code).toBe(0);
  });
});
