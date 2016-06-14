'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);


var _base = require('./base');var _base2 = _interopRequireDefault(_base);
var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                      * Created by zl on 2015/12/31.
                                                                                                                                                                      */var Main = function (_Base) {(0, _inherits3.default)(Main, _Base);function Main() {(0, _classCallCheck3.default)(this, Main);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}Main.prototype.
  indexAction = function indexAction() {
    var options = this.config('tpl');
    options = think.extend({}, options, { type: 'ejs' });
    var file = _path2.default.resolve(think.ROOT_PATH, 'www/static/index.html');
    return this.display(file, options);};Main.prototype.


  searchAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      keyword, 
      segment, 



      itemModel, 
      allItems, 
      result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:keyword = this.param('keyword');segment = think.segment.doSegment(keyword, { simple: true, stripPunctuation: true });itemModel = think.model('item', null, 'home');_context.next = 5;return itemModel.select();case 5:allItems = _context.sent;result = allItems.
              map(function (item) {
                var titleHint = 0;
                var contentHint = 0;

                for (var _iterator = segment, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {var _ref;if (_isArray) {if (_i >= _iterator.length) break;_ref = _iterator[_i++];} else {_i = _iterator.next();if (_i.done) break;_ref = _i.value;}var i = _ref;
                  titleHint += (item.name || '').split(i).length - 1;
                  contentHint += (item.desc || '').split(i).length - 1;}

                item.hintTimes = titleHint * 2 + contentHint;
                return item;}).

              filter(function (i) {return i.hintTimes;}).
              sort(function (x, y) {return y.hintTimes - x.hintTimes || y.createAt.valueOf() - x.createAt.valueOf();});return _context.abrupt('return', 


              this.success(result));case 8:case 'end':return _context.stop();}}}, _callee, this);}));function searchAction() {return ref.apply(this, arguments);}return searchAction;}();Main.prototype.


  testAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 

      result;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;_context2.next = 3;return think.model('bid', null, 'home').select();case 3:result = _context2.sent;return _context2.abrupt('return', 
              this.success(result));case 7:_context2.prev = 7;_context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);return _context2.abrupt('return', 
              this.fail(_context2.t0));case 11:case 'end':return _context2.stop();}}}, _callee2, this, [[0, 7]]);}));function testAction() {return ref.apply(this, arguments);}return testAction;}();return Main;}(_base2.default);exports.default = Main;