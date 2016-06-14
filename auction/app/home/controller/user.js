'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);


var _base = require('./base');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var 
User = function (_Base) {(0, _inherits3.default)(User, _Base);function User() {(0, _classCallCheck3.default)(this, User);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}User.prototype.


  init = function init() {var _Base$prototype$init;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    (_Base$prototype$init = _Base.prototype.init).call.apply(_Base$prototype$init, [this].concat(args));
    this.userModel = this.model('user');};User.prototype.


  signupAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      username, 
      password, 
      email, 

      result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:username = this.param('username');password = this.param('password');email = this.param('email');_context.next = 5;return this.userModel.createUser(username, password, email);case 5:result = _context.sent;if (!

              think.isString(result)) {_context.next = 10;break;}return _context.abrupt('return', 
              this.fail(result));case 10:_context.t0 = 


              this;_context.next = 13;return this._login(result);case 13:_context.t1 = _context.sent;return _context.abrupt('return', _context.t0.success.call(_context.t0, _context.t1));case 15:case 'end':return _context.stop();}}}, _callee, this);}));function signupAction() {return ref.apply(this, arguments);}return signupAction;}();User.prototype.





  loginAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
      username, 
      password, 

      result;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:username = this.param('username');password = this.param('password');_context2.next = 4;return this.userModel.checkUser(username, password);case 4:result = _context2.sent;if (!

              think.isString(result)) {_context2.next = 7;break;}return _context2.abrupt('return', 
              this.fail(result));case 7:_context2.t0 = 


              this;_context2.next = 10;return this._login(result);case 10:_context2.t1 = _context2.sent;return _context2.abrupt('return', _context2.t0.success.call(_context2.t0, _context2.t1));case 12:case 'end':return _context2.stop();}}}, _callee2, this);}));function loginAction() {return ref.apply(this, arguments);}return loginAction;}();User.prototype.



  logoutAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (

                this.session());case 2:return _context3.abrupt('return', 
              this.success());case 3:case 'end':return _context3.stop();}}}, _callee3, this);}));function logoutAction() {return ref.apply(this, arguments);}return logoutAction;}();User.prototype.


  _login = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(user) {var 

      authorities, 


      obj;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return this.session('user', user);case 2:_context4.next = 4;return this.userModel.getUserAuthorities(user.username);case 4:authorities = _context4.sent;_context4.next = 7;return this.session('authorities', authorities);case 7:obj = { user: user, authorities: authorities };
              //删除敏感信息
              delete obj.user.password;return _context4.abrupt('return', 
              obj);case 10:case 'end':return _context4.stop();}}}, _callee4, this);}));function _login(_x) {return ref.apply(this, arguments);}return _login;}();return User;}(_base2.default); /**
                                                                                                                                                                                                 * Created by zl on 16/2/23.
                                                                                                                                                                                                 */exports.default = User;