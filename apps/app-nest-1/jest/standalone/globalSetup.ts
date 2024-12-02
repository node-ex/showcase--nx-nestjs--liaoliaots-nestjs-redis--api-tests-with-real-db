import type { Config } from '@jest/types';
import { debug as _debug } from 'debug';
import { Redis } from 'ioredis';

const debug = _debug('jest-redis:setup:custom');

export default async (
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig,
): Promise<void> => {
  // For outputting next debug message on a new line
  debug('');
  debug('standalone setup.ts');

  const host = process.env['REDIS_HOST']!;
  const port = parseInt(process.env['REDIS_PORT']!, 10);
  const password = process.env['REDIS_PASSWORD'];
  const keyPrefix = process.env['REDIS_KEY_PREFIX'];

  try {
    const connection = new Redis({
      host,
      port,
      ...(password != null ? { password } : {}),
      ...(keyPrefix != null ? { keyPrefix } : {}),
      lazyConnect: true,
    });
    await connection.connect();
    debug('connection test successful');
    connection.disconnect();
  } catch (e) {
    debug('connection test error', e);
    throw e;
  }
};
