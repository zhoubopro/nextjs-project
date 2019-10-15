const Redis = require('ioredis');
async function run() {
  const redis = new Redis({
    port: 6379,
    host: '127.0.0.1'
  });

  await redis.set('c', 123);
  const keys = await redis.keys('*');
  console.log(keys)
};
run();

