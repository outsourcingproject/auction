var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);

var instance = new thinkjs({
  APP_PATH: path.resolve(rootPath, 'app'),
  ROOT_PATH: rootPath,
  RESOURCE_PATH: path.resolve(rootPath, '../front/dist'),
  UPLOAD_PATH: process.env.OPENSHIFT_DATA_DIR || path.resolve(rootPath, "upload"),
  env: 'development'
});

instance.compile({retainLines: true, log: true});

instance.run();