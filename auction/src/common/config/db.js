'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  host: process.env.OPENSHIFT_MYSQL_DB_HOST || '127.0.0.1',
  port: process.env.OPENSHIFT_MYSQL_DB_PORT || '3306',
  database: process.env.OPENSHIFT_APP_NAME || 'auction',
  user: process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'root',
  password: process.env.OPENSHIFT_MYSQL_DB_PASSWORD || '888888',
  prefix: '',
  encoding: 'utf8',
  nums_per_page: 10,
  log_sql: true,
  log_connect: true,
  connectionLimit: 10,
  cache: {
    on: false,
    type: '',
    timeout: 3600
  },
  adapter: {
    mysql: {}
  }
};