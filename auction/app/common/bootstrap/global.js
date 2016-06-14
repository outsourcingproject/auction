'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * this file will be loaded before server started
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * you can define global functions used in controllers, models, templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *     
 * }
 */

// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();


var initAuthority = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 

    defaultAuthorities, 
    authorityModel, _iterator, _isArray, _i, _ref, 

    authority, 
    result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:defaultAuthorities = think.config('site.defaultAuthorities');authorityModel = think.model('authority', null, 'home');_iterator = defaultAuthorities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);case 3:if (!_isArray) {_context.next = 9;break;}if (!(_i >= _iterator.length)) {_context.next = 6;break;}return _context.abrupt('break', 22);case 6:_ref = _iterator[_i++];_context.next = 13;break;case 9:_i = _iterator.next();if (!_i.done) {_context.next = 12;break;}return _context.abrupt('break', 22);case 12:_ref = _i.value;case 13:authority = _ref;_context.next = 16;return authorityModel.where({ name: authority.name }).find();case 16:result = _context.sent;if (!
            think.isEmpty(result)) {_context.next = 20;break;}_context.next = 20;return (
              authorityModel.addAuthority(authority.name, authority.desc, authority.paths));case 20:_context.next = 3;break;case 22:case 'end':return _context.stop();}}}, _callee, undefined);}));return function initAuthority() {return ref.apply(this, arguments);};}();



var initRole = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 

    defaultRoles, 
    roleModel, _iterator2, _isArray2, _i2, _ref2, 

    role, 
    result;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:defaultRoles = think.config('site.defaultRoles');roleModel = think.model('role', null, 'home');_iterator2 = defaultRoles, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);case 3:if (!_isArray2) {_context2.next = 9;break;}if (!(_i2 >= _iterator2.length)) {_context2.next = 6;break;}return _context2.abrupt('break', 22);case 6:_ref2 = _iterator2[_i2++];_context2.next = 13;break;case 9:_i2 = _iterator2.next();if (!_i2.done) {_context2.next = 12;break;}return _context2.abrupt('break', 22);case 12:_ref2 = _i2.value;case 13:role = _ref2;_context2.next = 16;return roleModel.where({ name: role.name }).find();case 16:result = _context2.sent;if (!
            think.isEmpty(result)) {_context2.next = 20;break;}_context2.next = 20;return (
              roleModel.addRole(role.name, role.desc, role.extend, role.authorities));case 20:_context2.next = 3;break;case 22:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function initRole() {return ref.apply(this, arguments);};}();




think.isStringExpReg = function (string) {
  return think.isRegExp(string) || string.match(/^\/[\w\W]+\/$/);};

think.segment = segment;

//Promise.all([initAuthority(), initRole()]).then();
initAuthority().then();
initRole().then();

global.removeHTMLTag = function (str) {
  return str.replace(/<[^>]+>/g, ""); //去掉所有的html标记
};