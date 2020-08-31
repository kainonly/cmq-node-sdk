import { client } from './helper';

jest.setTimeout(60 * 1000);
describe('主题基础功能', () => {
  const topicName = 'Test-' +
    Math.random()
      .toString(32)
      .slice(-8);

  test('创建主题', async () => {
    const response = await client.createTopic({
      topicName: topicName,
    });
    expect(response.code).toBe(0);
  });

  test('获取主题列表', async () => {
    const response = await client.listTopic({
      limit: 20,
    });
    expect(response.code).toBe(0);
  });

  test('修改主题属性', async (done) => {
    setTimeout(async () => {
      const response = await client.setTopicAttributes({
        topicName: topicName,
        maxMsgSize: 131072,
      });
      expect(response.code).toBe(0);
      done();
    }, 5000);
  });

  test('获取主题属性', async () => {
    const response = await client.getTopicAttributes({
      topicName: topicName,
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
