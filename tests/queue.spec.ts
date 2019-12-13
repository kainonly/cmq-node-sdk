import { clientUseSha1 } from './helper';

describe('队列基础功能', () => {
  jest.setTimeout(60 * 1000);
  const queueName = 'Test-' +
    Math.random()
      .toString(32)
      .slice(-8);

  test('创建队列', async () => {
    const response = await clientUseSha1.createQueue({
      queueName: queueName,
    });
    expect(response.code).toBe(0);
  });

  test('获取队列列表', async () => {
    const response = await clientUseSha1.listQueue({
      limit: 20,
    });
    expect(response.code).toBe(0);
  });

  test('获取队列属性', async (done) => {
    setTimeout(async () => {
      const response = await clientUseSha1.getQueueAttributes({
        queueName: queueName,
      });
      expect(response.code).toBe(0);
      done();
    }, 2000);
  });

  test('修改队列属性', async () => {
    const response = await clientUseSha1.setQueueAttributes({
      queueName: queueName,
      maxMsgHeapNum: 5000000,
    });
    expect(response.code).toBe(0);
  });

  test('删除队列', async () => {
    const response = await clientUseSha1.deleteQueue({
      queueName: queueName,
    });
    expect(response.code).toBe(0);
  });
});
