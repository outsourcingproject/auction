'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);


var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var ObjectID = require('mongodb-core').BSON.ObjectID;

/**
 * 成功时返回true或者具体对象
 * 失败时返回失败字符串,具体请参看 /src/common/config/local/en.js
 * 如果没有当前需要的失败字符串,请在该文件中定义
 */ /**
     * Created by zl on 2015/12/30.
     */var User = function (_Base) {(0, _inherits3.default)(User, _Base);function User() {var _temp, _this, _ret;(0, _classCallCheck3.default)(this, User);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.schema = { 
      username: { 
        type: String, 
        required: true, 
        unique: true }, 

      password: { 
        type: String, 
        required: true }, 

      email: { 
        type: String, 
        required: true }, 

      emailValidate: { 
        type: Boolean, 
        required: true, 
        default: false }, 

      level: { 
        type: Number, 
        default: 0 }, 

      role: { 
        //ref to collection role.name
        type: String, 
        required: true }, 

      createAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} }, 

      updateAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} } }, _this.



    indexes = { 
      username: { $unique: 1 } }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}


  /**
   *
   * @param username
   * @param password
   * @param email
   * @param role
   * @returns {*} user object if success, otherwise err string
   */User.prototype.
  createUser = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(username, password, email) {var role = arguments.length <= 3 || arguments[3] === undefined ? 'registered' : arguments[3];var 
      result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.where({ username: username }).select();case 2:result = _context.sent;if (
              think.isEmpty(result)) {_context.next = 5;break;}return _context.abrupt('return', 
              'USER_ALREADY_EXIST');case 5:_context.next = 7;return (

                this.where({ email: email }).select());case 7:result = _context.sent;if (
              think.isEmpty(result)) {_context.next = 10;break;}return _context.abrupt('return', 
              'EMAIL_ALREADY_USED');case 10:_context.next = 12;return (

                this.add({ username: username, password: password, email: email, role: role }));case 12:result = _context.sent;return _context.abrupt('return', 

              this.where({ _id: result }).find());case 14:case 'end':return _context.stop();}}}, _callee, this);}));function createUser(_x, _x2, _x3, _x4) {return ref.apply(this, arguments);}return createUser;}();



  /**
   *
   * @param username
   * @param password
   * @returns {*} user object if success, otherwise err string
   */User.prototype.
  checkUser = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(username, password) {var 
      result;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this.where({ username: username }).find();case 2:result = _context2.sent;if (!
              think.isEmpty(result)) {_context2.next = 5;break;}return _context2.abrupt('return', 
              'NO_THIS_USER');case 5:if (!(

              result.password != password)) {_context2.next = 7;break;}return _context2.abrupt('return', 
              'PASSWORD_WORRY');case 7:return _context2.abrupt('return', 

              result);case 8:case 'end':return _context2.stop();}}}, _callee2, this);}));function checkUser(_x6, _x7) {return ref.apply(this, arguments);}return checkUser;}();


  /**
   *
   * @param username
   * @returns {Promise}
   */User.prototype.
  delUser = function delUser(username) {
    return this.where({ username: username }).delete();};


  /**
   *
   * @param username
   * @returns {Promise<Role>}
   */User.prototype.
  getUserRole = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(username) {var 
      user, 
      roleModel;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this.where({ username: username }).find();case 2:user = _context3.sent;roleModel = think.model('role', null, 'home');return _context3.abrupt('return', 
              roleModel.where({ name: user.role }).find());case 5:case 'end':return _context3.stop();}}}, _callee3, this);}));function getUserRole(_x8) {return ref.apply(this, arguments);}return getUserRole;}();


  /**
   *
   * @param username
   * @returns {Promise<[Authority]>}
   */User.prototype.
  getUserAuthorities = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(username) {var 
      roleModel, 

      user, 
      role;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:roleModel = think.model('role', null, 'home');_context4.next = 3;return this.where({ username: username }).find();case 3:user = _context4.sent;_context4.next = 6;return roleModel.where({ name: user.role }).find();case 6:role = _context4.sent;return _context4.abrupt('return', 

              roleModel.getRoleAuthorities(role.name));case 8:case 'end':return _context4.stop();}}}, _callee4, this);}));function getUserAuthorities(_x9) {return ref.apply(this, arguments);}return getUserAuthorities;}();return User;}(_base2.default);exports.default = User;