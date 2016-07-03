'use strict';

/**
 * session configs
 */
export default {
  name: 'thinkjs',
  type: 'redis',
  secret: '~W86ZG^M',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.getPath('common', 'runtime') + '/session',
    },
    redis: {
      prefix: "session_"
    }
  }
};