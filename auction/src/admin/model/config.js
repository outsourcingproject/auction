import Base from './base.js'
export default class config extends Base {
  schema = {
    config: {
      type:Object,
      required: true,
      default: ()=>think.config('site')
    },
    createAt: {
      type:Date,
      required: true,
      default: ()=>new Date()
    },
    updateAt: {
      type:Date,
      required: true,
      default: ()=>new Date()
    }
  };

  /**
   *
   * @param key {String} the path of config, e.g. 'foo.bar' will get config.foo.bar
   * @returns {*} val
   */
  async get(key) {
    let config = await this._getDBConfig();
    if (typeof key == 'undefined')
      return config;
    let keys = key.split('.');
    let objectGet = (keys, obj)=> {
      if (keys.length != 0) {
        let key = keys[0];
        if (typeof obj[key] == 'undefined') {
          return obj[key];
        }
        keys.shift();
        return objectGet(keys, obj[key]);

      }
      return obj;
    };
    return objectGet(keys, config);
  }

  /**
   *
   * @param key {String} the path of config, e.g. 'foo.bar' indicates config.foo.bar
   * @param val {*} value of setting
   * @returns {*} old value
   */
  async set(key, val) {
    if (!key) {
      return;
    }
    let config;
    if (typeof key == 'object') {
      config = key;
      await this.save(config);
      return config;
    } else {
      config = await this._getDBConfig();
      let keys = key.split('.');

      let objectSet = (keys, val, obj)=> {
        if (keys.length == 0)
          return;

        let key = keys[0];
        if (keys.length == 1) {
          let oldVal = obj[key];
          obj[key] = val;
          return oldVal;
        } else {
          if (typeof obj[key] != 'object') {
            obj[key] = {};
          }
          keys.shift();
          return objectSet(keys, val, obj[key]);
        }
      };
      let oldVal = objectSet(keys, val, config);
      await this.update(config);

      return oldVal;
    }
  }

  /**
   * set all config to default
   * @returns {Promise}
   */
  setToDefault() {
    return this.delete();
  }

  /**
   * if db is empty, it will auto save default config into db, which locals in common/config/site.js
   * @returns {*} config in db
   * @private
   */
  async _getDBConfig() {
    let config = await this.select();

    let defaultConfig = think.config('site');
    if (config.length != 1) {
      await this.delete();
      await this.add({config: defaultConfig});
      return defaultConfig;
    }
    return config[0].config;
  }
}