'use strict';exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Created by zl on 16/2/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */var 
User = function (_think$logic$base) {(0, _inherits3.default)(User, _think$logic$base);function User() {(0, _classCallCheck3.default)(this, User);return (0, _possibleConstructorReturn3.default)(this, _think$logic$base.apply(this, arguments));}User.prototype.
  signupAction = function signupAction() {
    //this.allowMethods = 'post';
    this.rules = { 
      username: { 
        required: true, 
        regexp: /^[a-zA-Z_]\w{5,19}$/ }, 

      password: { 
        required: true, 
        regexp: /^\w{6,20}$/ }, 

      email: { 
        required: true, 
        email: true } };};User.prototype.




  loginAction = function loginAction() {
    //this.allowMethods = 'post';
    this.rules = { 
      username: { 
        required: true, 
        regexp: /^[a-zA-Z_]\w{5,19}$/ }, 

      password: { 
        required: true, 
        regexp: /^\w{6,20}$/ } };};User.prototype.




  logoutAction = function logoutAction() {
    this.allowMethods = 'get';};return User;}(think.logic.base);exports.default = User;