import { client } from './helper';

describe('队列消息回溯功能', () => {
  const queueName = 'Test-' +
    Math.random()
      .toString(32)
      .slice(-8);

  test('创建队列', async () => {
    const response = await client.createQueue({
      queueName: queueName,
      rewindSeconds: 3600,
    });
    expect(response.code).toBe(0);
  });

  test('向队列发送消息', async (done) => {
    jest.setTimeout(60 * 1000);
    setTimeout(async () => {
      const response = await client.sendMessage({
        queueName: queueName,
        msgBody: `{"test":"rewind"}`,
      });
      expect(response.code).toBe(0);
      done();
    }, 5000);
  });

  test('接收消息并删除消息', async (done) => {
    setTimeout(async () => {
      const responseReceive = await client.receiveMessage({
        queueName: queueName,
      });
      expect(responseReceive.code).toBe(0);
      expect(responseReceive.receiptHandle).not.toBeNull();
      const response = await client.deleteMessage({
        queueName: queueName,
        receiptHandle: responseReceive.receiptHandle,
      });
      expect(response.code).toBe(0);
      done();
    }, 2000);
  });

  test('回溯消息', async (done) => {
    jest.setTimeout(60 * 1000);
    setTimeout(async () => {
      const now = Math.floor(new Date().getTime() / 1000);
      const response = await client.rewindQueue({
        queueName: queueName,
        startConsumeTime: now - 1800,
      });
      expect(response.code).toBe(0);
      done();
    }, 10000);
  });

  test('删除队列', async () => {
    const response = await client.deleteQueue({
      queueName: queueName,
    });
    expect(response.code).toBe(0);
  });
});
