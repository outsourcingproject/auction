'use strict';

export default {
    //服务监听的端口
    port: process.env.OPENSHIFT_NODEJS_PORT || '8360',
    //服务监听的 host
    host: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    auto_reload: false,
    log_request: true,
    db: {
        host: process.env.OPENSHIFT_MONGODB_DB_HOST || '127.0.0.1',
        port: process.env.OPENSHIFT_MONGODB_DB_PORT || '27017',
        database: process.env.OPENSHIFT_APP_NAME || 'auction',
        user: process.env.OPENSHIFT_MONGODB_DB_USERNAME || '',
        password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD || '',
        nums_per_page: 10,
        log_connect: true,
        connectionLimit: 10,
        cache: {
            on: false,
            type: '',
            timeout: 3600
        }
    },
    error: {
        detail: true
    }
};