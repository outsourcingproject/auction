'use strict';
/**
 * db config
 * @type {Object}
 */exports.__esModule = true;exports.default = 
{ 
  type: 'mongo', 
  host: 'localhost', 
  port: '27017', 
  database: 'auction', 
  //user: 'root',
  //password: '888888',
  prefix: '', 
  encoding: 'utf8', 
  nums_per_page: 10, 
  log_sql: true, 
  log_connect: true, 
  connectionLimit: 10, 
  cache: { 
    on: false, 
    type: '', 
    timeout: 3600 }, 

  adapter: { 
    mysql: {}, 
    mongo: {} } };