import { REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } from '$env/static/private';
import { createClient } from 'redis';

export const redis = await createClient({
	password: REDIS_PASSWORD,
	socket: {
		host: REDIS_HOST,
		port: REDIS_PORT
	}
}).connect();
