import { client } from './helper';

describe('主题消息功能', () => {
  jest.setTimeout(60 * 1000);
  const topicName = 'Test-' +
    Math.random()
      .toString(32)
      .slice(-8);
  const subscriptionName = 'Test-Sub-' +
    Math.random()
      .toString(32)
      .slice(-8);

  test('创建主题', async () => {
    const response = await client.createTopic({
      topicName: topicName,
    });
    expect(response.code).toBe(0);
  });

  test('订阅主题', async (done) => {
    setTimeout(async () => {
      const response = await client.subscribe({
        topicName: topicName,
        subscriptionName: subscriptionName,
        protocol: 'queue',
        endpoint: 'normal',
      });
      expect(response.code).toBe(0);
      done();
    }, 3000);
  });

  test('发布消息', async (done) => {
    setTimeout(async () => {
      const response = await client.publishMessage({
        topicName: topicName,
        msgBody: `{"name":"kain"}`,
      });
      expect(response.code).toBe(0);
      done();
    }, 5000);
  });

  test('批量发布消息', async (done) => {
    setTimeout(async () => {
      const data: string[] = [];
      for (let i = 0; i < 10; i++) {
        data.push(`{"index":${i}}`);
      }
      const response = await client.batchPublishMessage({
        topicName: topicName,
        msgBody: data,
      });
      expect(response.code).toBe(0);
      done();
    }, 5000);
  });

  test('取消订阅', async () => {
    const response = await client.unsubscribe({
      topicName: topicName,
      subscriptionName: subscriptionName,
    });
    expect(response.code).toBe(0);
  });

  test('删除主题', async () => {
    const response = await client.deleteTopic({
      topicName: topicName,
    });
    expect(response.code).toBe(0);
  });
});
