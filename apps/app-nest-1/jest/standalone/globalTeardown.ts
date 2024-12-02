import type { Config } from '@jest/types';
import { debug as _debug } from 'debug';

const debug = _debug('jest-redis:teardown:custom');

export default (
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig,
): void => {
  debug('standalone teardown.ts');
};
