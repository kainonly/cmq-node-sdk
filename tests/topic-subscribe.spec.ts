import { client } from './helper';

jest.setTimeout(60 * 1000);
describe('主题订阅功能', () => {
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
        filterTag: ['system'],
      });
      expect(response.code).toBe(0);
      done();
    }, 10000);
  });

  test('获取订阅列表', async () => {
    const response = await client.listSubscriptionByTopic({
      topicName: topicName,
      limit: 20,
    });
    expect(response.code).toBe(0);
  });

  test('修改订阅属性', async (done) => {
    setTimeout(async () => {
      const response = await client.setSubscriptionAttributes({
        topicName: topicName,
        subscriptionName: subscriptionName,
        notifyStrategy: 'BACKOFF_RETRY',
      });
      expect(response.code).toBe(0);
      done();
    }, 5000);
  });

  test('获取订阅属性', async () => {
    const response = await client.getSubscriptionAttributes({
      topicName: topicName,
      subscriptionName: subscriptionName,
    });
    expect(response.code).toBe(0);
  });

  test('清空订阅标签', async () => {
    const response = await client.clearSubscriptionFilterTags({
      topicName: topicName,
      subscriptionName: subscriptionName,
    });
    expect(response.code).toBe(0);
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
