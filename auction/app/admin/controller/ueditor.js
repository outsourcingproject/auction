'use strict';exports.__esModule = true;var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);
var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}_class.prototype.




  init = function init() {var _Base$prototype$init;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    (_Base$prototype$init = _Base.prototype.init).call.apply(_Base$prototype$init, [this].concat(args));};


  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  indexAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 


      action, 

      result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0: //auto render template file index_index.html
              this.config = this.config("ueditor");action = this.get("action");think.log(action);result = void 0;_context.t0 = action;_context.next = _context.t0 === 
              'config' ? 7 : _context.t0 === 





              'uploadimage' ? 9 : _context.t0 === 

              'uploadscrawl' ? 9 : _context.t0 === 

              'uploadvideo' ? 9 : _context.t0 === 

              'uploadfile' ? 9 : _context.t0 === 






              'listimage' ? 11 : _context.t0 === 

              'listfile' ? 11 : _context.t0 === 




              'catchimage' ? 13 : 17;break;case 7:result = this.config;return _context.abrupt('break', 19);case 9:result = this.uploads(); //console.log(result);
              return _context.abrupt('break', 19);case 11:result = this.uploadlist();return _context.abrupt('break', 19);case 13:_context.next = 15;return this.crawler();case 15:result = _context.sent;return _context.abrupt('break', 19);case 17:



              result = { 
                state: '请求地址出错' };return _context.abrupt('break', 19);case 19:




              //返回结果
              this.jsonp(result);case 20:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return ref.apply(this, arguments);}return indexAction;}();_class.prototype.



  uploads = function uploads() {
    /**
     * 得到上传文件所对应的各个参数,数组结构
     * obj={
     *     "state" : "",          //上传状态，上传成功时必须返回"SUCCESS"
     *     "url" : "",            //返回的地址
     *     "title" : "",          //新文件名
     *     "original" : "",       //原始文件名
     *     "type" : "" ,           //文件类型
     *     "size" : "",           //文件大小
     * }
     */
    var action = this.get("action");
    var base64 = "upload";
    var config = {};
    var fieldName = void 0;

    switch (action) {
      case 'uploadimage':
        config = { 
          pathFormat: this.config['imagePathFormat'], 
          maxSize: this.config['imageMaxSize'], 
          allowFiles: this.config['imageAllowFiles'] };

        fieldName = this.config['imageFieldName'];
        break;
      case 'uploadscrawl':
        config = { 
          "pathFormat": this.config['scrawlPathFormat'], 
          "maxSize": this.config['scrawlMaxSize'], 
          "allowFiles": this.config['scrawlAllowFiles'], 
          "oriName": "scrawl.png" };

        fieldName = this.config['scrawlFieldName'];
        base64 = "base64";
        break;
      case 'uploadvideo':
        config = { 
          "pathFormat": this.config['videoPathFormat'], 
          "maxSize": this.config['videoMaxSize'], 
          "allowFiles": this.config['videoAllowFiles'] };

        fieldName = this.config['videoFieldName'];
        break;
      case 'uploadfile':
      default:
        config = { 
          "pathFormat": this.config['filePathFormat'], 
          "maxSize": this.config['fileMaxSize'], 
          "allowFiles": this.config['fileAllowFiles'] };

        fieldName = this.config['fileFieldName'];
        break;}

    //return self.uploader(fieldName, config, oriName, size, path, base64);
    var up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter
    var upload = new up(fieldName, config, base64, this.http); //实例化 Adapter

    return upload.getFileInfo();};


  //抓取远程图片
  _class.prototype.crawler = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 

      config, 





      fieldName, 
      source, 





      list, _iterator, _isArray, _i, _ref, 
      imgUrl, 
      up, 
      upload, 
      info;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0: /* 上传配置 */config = { "pathFormat": this.config['catcherPathFormat'], "maxSize": this.config['catcherMaxSize'], "allowFiles": this.config['catcherAllowFiles'], "oriName": "remote.png" };fieldName = this.config['catcherFieldName'];source = this.post(fieldName + "[]");if (think.isArray(source)) {source = source;} else {source = [source];}list = [];_iterator = source, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);case 6:if (!_isArray) {_context2.next = 12;break;}if (!(_i >= _iterator.length)) {_context2.next = 9;break;}return _context2.abrupt('break', 25);case 9:_ref = _iterator[_i++];_context2.next = 16;break;case 12:_i = _iterator.next();if (!_i.done) {_context2.next = 15;break;}return _context2.abrupt('break', 25);case 15:_ref = _i.value;case 16:imgUrl = _ref;up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter
              upload = new up(imgUrl, config, "remote"); //实例化 Adapter
              _context2.next = 21;return upload.saveRemote();case 21:info = _context2.sent; //console.log(info);
              list.push({ "state": "SUCCESS", 
                "url": info.url, 
                "size": 431521, 
                "title": info.title, 
                "original": info.original, 
                "source": imgUrl });case 23:_context2.next = 6;break;case 25:return _context2.abrupt('return', 



              { 
                state: !think.isEmpty(list) ? 'SUCCESS' : 'ERROR', 
                list: list });case 26:case 'end':return _context2.stop();}}}, _callee2, this);}));function crawler() {return ref.apply(this, arguments);}return crawler;}();



  /**
   * 获取已上传的文件列表
   */_class.prototype.
  uploadlist = function uploadlist() {
    var allowFiles, listSize, path;
    //判断类型
    switch (this.get("action")) {
      //列出文件
      case 'listfile':
        allowFiles = this.config['fileManagerAllowFiles'];
        listSize = this.config['fileManagerListSize'];
        path = this.config['fileManagerListPath'];
        break;
      //列出图片
      case 'listimage':
      default:
        allowFiles = this.config['imageManagerAllowFiles'];
        listSize = this.config['imageManagerListSize'];
        path = this.config['imageManagerListPath'];}

    //allowFiles = allowFiles.join("").replace(/[.]/g,"|").substr(1);
    /* 获取参数 */
    var size = this.get('size') ? this.get('size') : listSize;
    var start = this.get('start') ? this.get('start') : 0;
    var end = parseInt(size) + parseInt(start);
    /* 获取文件列表 */
    path = path.substr(0, path.lastIndexOf("/"));
    var files = this.scanFolder(path).files;
    if (files.length == 0) {
      return { 
        "state": "no match file", 
        "list": [], 
        "start": start, 
        "total": files.length };}


    /* 获取指定范围的列表 */
    var len = files.length;
    var files_n = [];
    for (var i = 0; i < len; i++) {
      var t = files[i].substr(files[i].lastIndexOf(".")).toLocaleLowerCase();
      if (allowFiles.includes(t)) {
        files_n.push(files[i]);}}



    var lenn = files_n.length;
    for (var _i2 = Math.min(end, lenn) - 1, _list = []; _i2 < lenn && _i2 >= 0 && _i2 >= start; _i2--) {
      var f = files_n[_i2];
      _list.push({ url: f });}


    return { 
      "state": "SUCCESS", 
      "list": list, 
      "start": start, 
      "total": files.length };};




  /**
   * 遍历获取目录下的指定类型的文件
   */_class.prototype.
  scanFolder = function scanFolder(path) {
    var fileList = [], 
    folderList = [], 
    walk = function walk(path, fileList, folderList) {
      var files = _fs2.default.readdirSync(think.UPLOAD_PATH + "/" + path);
      files.forEach(function (item) {
        var tmpPath = path + '/' + item, 
        stats = _fs2.default.statSync(think.UPLOAD_PATH + "/" + tmpPath);

        if (stats.isDirectory()) {
          walk(tmpPath, fileList, folderList);
          folderList.push(tmpPath);} else 
        {
          fileList.push(tmpPath);}});};




    walk(path, fileList, folderList);

    console.log('扫描' + path + '成功');

    return { 
      'files': fileList, 
      'folders': folderList };};return _class;}(_base2.default);exports.default = _class;