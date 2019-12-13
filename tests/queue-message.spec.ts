import { client } from './helper';

describe('队列消息功能', () => {
  const queueName = 'Test-' +
    Math.random()
      .toString(32)
      .slice(-8);

  test('创建队列', async () => {
    const response = await client.createQueue({
      queueName: queueName,
    });
    expect(response.code).toBe(0);
  });

  test('向队列发送消息', async (done) => {
    jest.setTimeout(60 * 1000);
    setTimeout(async () => {
      const response = await client.sendMessage({
        queueName: queueName,
        msgBody: `{"name":"kain"}`,
      });
      expect(response.code).toBe(0);
      done();
    }, 5000);
  });

  let receiptHandle: string;

  test('接收消息', async (done) => {
    setTimeout(async () => {
      const response = await client.receiveMessage({
        queueName: queueName,
      });
      expect(response.code).toBe(0);
      expect(response.receiptHandle).not.toBeNull();
      receiptHandle = response.receiptHandle;
      done();
    }, 2000);
  });

  test('删除消息', async (done) => {
    setTimeout(async () => {
      const response = await client.deleteMessage({
        queueName: queueName,
        receiptHandle: receiptHandle,
      });
      expect(response.code).toBe(0);
      done();
    }, 2000);
  });

  test('批量发送消息', async (done) => {
    setTimeout(async () => {
      const data: string[] = [];
      for (let i = 0; i < 10; i++) {
        data.push(`{"index":${i}}`);
      }
      const response = await client.batchSendMessage({
        queueName: queueName,
        msgBody: data,
      });
      expect(response.code).toBe(0);
      done();
    }, 2000);
  });

  const receiptHandles: string[] = [];

  test('批量接收消息', async (done) => {
    setTimeout(async () => {
      const response = await client.batchReceiveMessage({
        queueName: queueName,
        numOfMsg: 16,
      });
      expect(response.code).toBe(0);
      expect(response.msgInfoList).not.toBeNull();
      for (const x of response.msgInfoList) {
        receiptHandles.push(x.receiptHandle);
      }
      done();
    }, 2000);
  });

  test('批量删除消息', async (done) => {
    setTimeout(async () => {
      const response = await client.batchDeleteMessage({
        queueName: queueName,
        receiptHandle: receiptHandles,
      });
      expect(response.code).toBe(0);
      done();
    }, 2000);
  });

  test('删除队列', async () => {
    const response = await client.deleteQueue({
      queueName: queueName,
    });
    expect(response.code).toBe(0);
  });
});
