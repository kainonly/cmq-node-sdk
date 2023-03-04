import { env } from 'process';
import { CMQ } from './';
import { faker } from '@faker-js/faker';

describe('HTTP 数据流测试', () => {
  const client: CMQ = new CMQ({
    protocol: env.PROTOCOL ?? 'https://',
    path: env.URL_PATH ?? '/v2/index.php',
    host: env.HOST ?? 'cmq-gz.public.tencenttdmq.com',
    secretId: env.SECRETID ?? '',
    secretKey: env.SECRETKEY ?? '',
    region: env.REGION ?? 'gz',
    api: {
      region: env.API_REGION ?? 'ap-guangzhou',
      endpoint: 'tdmq.tencentcloudapi.com'
    }
  });
  const queue = faker.random.alpha(8);
  const queueForBatch = faker.random.alpha(8);
  const queueForTopic = faker.random.alpha(8);
  const topic = faker.random.alpha(8);
  const subscription = faker.random.alpha(8);

  beforeAll(async () => {
    await client.api.CreateCmqQueue({ QueueName: queue });
    await client.api.CreateCmqQueue({ QueueName: queueForBatch });
    await client.api.CreateCmqQueue({ QueueName: queueForTopic });
    await client.api.CreateCmqTopic({ TopicName: topic });
    await client.api.CreateCmqSubscribe({
      TopicName: topic,
      SubscriptionName: subscription,
      Protocol: 'queue',
      Endpoint: queueForTopic,
      NotifyContentFormat: 'SIMPLIFIED'
    });
  });

  const text1 = faker.random.alpha(8);

  test('投递消息', async () => {
    const r = await client.sendMessage({
      queueName: queue,
      msgBody: text1
    });
    expect(r.code).toBe(0);
  });

  let receiptHandle: string;

  test('消费消息', async () => {
    const r = await client.receiveMessage({
      queueName: queue,
      pollingWaitSeconds: 15
    });
    expect(r.code).toBe(0);
    expect(r.msgBody).toBe(text1);
    expect(r.receiptHandle).not.toBeNull();
    receiptHandle = r.receiptHandle;
  });

  test('删除消息', async () => {
    const r = await client.deleteMessage({
      queueName: queue,
      receiptHandle
    });
    expect(r.code).toBe(0);
  });

  const data1: string[] = faker.datatype.array(3).map(v => v.toString());

  test('批量投递消息', async () => {
    const r = await client.batchSendMessage({
      queueName: queueForBatch,
      msgBody: data1
    });
    expect(r.code).toBe(0);
  });

  let receiptHandles: string[] = [];

  test('批量接收消息', async () => {
    const r = await client.batchReceiveMessage({
      queueName: queueForBatch,
      numOfMsg: 3,
      pollingWaitSeconds: 15
    });
    expect(r.code).toBe(0);
    expect(r.msgInfoList).not.toBeNull();
    receiptHandles = [];
    r.msgInfoList.forEach(value => {
      expect(data1).toContain(value.msgBody);
      receiptHandles.push(value.receiptHandle);
    });
  });

  test('批量删除消息', async () => {
    const r = await client.batchDeleteMessage({
      queueName: queueForBatch,
      receiptHandle: receiptHandles
    });
    expect(r.code).toBe(0);
  });

  const text2 = faker.random.alpha(8);

  test('发布消息', async () => {
    const r = await client.publishMessage({
      topicName: topic,
      msgBody: text2
    });
    expect(r.code).toBe(0);
  });

  const data2: string[] = faker.datatype.array(2).map(v => v.toString());

  test('批量发布消息', async () => {
    const r = await client.batchPublishMessage({
      topicName: topic,
      msgBody: data2
    });
    expect(r.code).toBe(0);
  });

  afterAll(async () => {
    await client.api.DeleteCmqQueue({ QueueName: queue });
    await client.api.DeleteCmqQueue({ QueueName: queueForBatch });
    await client.api.DeleteCmqSubscribe({
      TopicName: topic,
      SubscriptionName: subscription
    });
    await client.api.DeleteCmqQueue({ QueueName: queueForTopic });
    await client.api.DeleteCmqTopic({ TopicName: topic });
  });
});
