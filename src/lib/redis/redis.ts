import { REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } from '$env/static/private';
import { createClient } from 'redis';

const redis = await createClient({
	password: REDIS_PASSWORD,
	socket: {
		host: REDIS_HOST,
		port: REDIS_PORT
	}
}).connect();

export async function redisSet(key, data) {
	await redis.set(key, JSON.stringify(data), 'EX', 6000);
}

export async function redisGet(key) {
	const res = await redis.get(key);
	return JSON.parse(res);
}
