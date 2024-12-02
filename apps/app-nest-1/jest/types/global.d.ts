import type { Redis } from 'ioredis';

declare global {
  /**
   * Available in the isolated test context
   */
  // eslint-disable-next-line no-var
  var __IOREDIS_CONNECTION__: Redis;
}

export {};
