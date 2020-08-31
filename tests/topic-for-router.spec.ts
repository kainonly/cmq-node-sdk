import { client } from './helper';

jest.setTimeout(60 * 1000);
describe('面向路由匹配的主题消息发布', () => {
  const topicName = 'Test-' +
    Math.random()
      .toString(32)
      .slice(-8);
  const subscriptionName1 = 'Test-Sub1-' +
    Math.random()
      .toString(32)
      .slice(-8);
  const subscriptionName2 = 'Test-Sub2-' +
    Math.random()
      .toString(32)
      .slice(-8);

  test('创建主题', async () => {
    const response = await client.createTopic({
      topicName: topicName,
      filterType: 2,
    });
    expect(response.code).toBe(0);
  });

  test('订阅主题', async (done) => {
    setTimeout(async () => {
      const response1 = await client.subscribe({
        topicName: topicName,
        subscriptionName: subscriptionName1,
        protocol: 'queue',
        endpoint: 'normal',
        bindingKey: ['system.common'],
      });
      expect(response1.code).toBe(0);
      const response2 = await client.subscribe({
        topicName: topicName,
        subscriptionName: subscriptionName2,
        protocol: 'queue',
        endpoint: 'normal',
        bindingKey: ['*.common'],
      });
      expect(response2.code).toBe(0);
      done();
    }, 5000);
  });

  test('向{*.common|system.common}发布消息', async (done) => {
    setTimeout(async () => {
      const response = await client.publishMessage({
        topicName: topicName,
        msgBody: `{"note":"both"}`,
        routingKey: 'system.common',
      });
      expect(response.code).toBe(0);
      done();
    }, 5000);
  });

  test('向{*.common}发布消息', async (done) => {
    setTimeout(async () => {
      const response = await client.publishMessage({
        topicName: topicName,
        msgBody: `{"name":"only"}`,
        routingKey: 'app.common',
      });
      expect(response.code).toBe(0);
      done();
    }, 5000);
  });

  test('核对消息投递数量', async (done) => {
    setTimeout(async () => {
      const response1 = await client.getSubscriptionAttributes({
        topicName: topicName,
        subscriptionName: subscriptionName1,
      });
      expect(response1.code).toBe(0);
      expect(response1.msgCount).toBe(1);
      const response2 = await client.getSubscriptionAttributes({
        topicName: topicName,
        subscriptionName: subscriptionName2,
      });
      expect(response2.code).toBe(0);
      expect(response2.msgCount).toBe(2);
      done();
    }, 20000);
  });

  test('取消订阅', async () => {
    const response1 = await client.unsubscribe({
      topicName: topicName,
      subscriptionName: subscriptionName1,
    });
    expect(response1.code).toBe(0);
    const response2 = await client.unsubscribe({
      topicName: topicName,
      subscriptionName: subscriptionName2,
    });
    expect(response2.code).toBe(0);
  });

  test('删除主题', async () => {
    const response = await client.deleteTopic({
      topicName: topicName,
    });
    expect(response.code).toBe(0);
  });
});
