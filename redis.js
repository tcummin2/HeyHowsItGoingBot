import redis from 'redis'

const redisClient = redis.createClient({ url: 'redis://redis:6379' })
console.debug('Connecting to Redis...')
await redisClient.connect()
console.debug('Redis connected!')

export default redisClient
