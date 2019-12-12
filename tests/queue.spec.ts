import { client } from './helper';

describe('队列相关接口', () => {
  test('创建队列', async () => {
    const response = await client.createQueue({
      queueName: 'createQueueTestA',
    });
    console.log(response);
    expect(response.code).toBe(0);
  });
  // test('获取队列列表', () => {
  // });
  // test('获取队列属性', () => {
  // });
  // test('修改队列属性', () => {
  // });
  // test('删除队列', () => {
  // });
  // test('回溯队列', () => {
  // });
});
