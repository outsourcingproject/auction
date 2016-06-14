'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var ValidateAuthority = function (_think$middleware$bas) {(0, _inherits3.default)(ValidateAuthority, _think$middleware$bas);function ValidateAuthority() {(0, _classCallCheck3.default)(this, ValidateAuthority);return (0, _possibleConstructorReturn3.default)(this, _think$middleware$bas.apply(this, arguments));}ValidateAuthority.prototype.
  init = function init() {var _think$middleware$bas2;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    (_think$middleware$bas2 = _think$middleware$bas.prototype.init).call.apply(_think$middleware$bas2, [this].concat(args));
    this.userModel = think.model('user', undefined, 'home');
    this.roleModel = think.model('role', undefined, 'home');};ValidateAuthority.prototype.


  run = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      pathname, 
      user, 

      authorities;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:pathname = this.http.pathname;_context.next = 3;return this.http.session('user');case 3:user = _context.sent;_context.next = 6;return this.http.session('authorities');case 6:authorities = _context.sent;if (!(


              !authorities || think.isEmpty(authorities))) {_context.next = 19;break;}if (!
              user) {_context.next = 14;break;}_context.next = 11;return (

                this.userModel.getUserAuthorities(user.username));case 11:authorities = _context.sent;_context.next = 17;break;case 14:_context.next = 16;return (



                this.roleModel.getRoleAuthorities('anonymous'));case 16:authorities = _context.sent;case 17:_context.next = 19;return (

                this.http.session('authorities', authorities));case 19:if (


              this._validate(pathname, authorities)) {_context.next = 24;break;}_context.next = 22;return (
                this.http.fail('NO_AUTHORITY'));case 22:
              this.http.end();return _context.abrupt('return', 
              think.prevent());case 24:case 'end':return _context.stop();}}}, _callee, this);}));function run() {return ref.apply(this, arguments);}return run;}();



  //基于URL的权限验证实现主方法
  ValidateAuthority.prototype._validate = function _validate(pathname, authorities) {
    var validated = false;
    authorities.forEach(function (i) {
      i.paths.forEach(function (o) {

        if (think.isStringExpReg(o)) {
          //string to RegExp
          o = eval(o);
          if (pathname.match(o)) {
            validated = true;}} else 

        {
          if (o == pathname) {
            validated = true;}}});});





    return validated;};return ValidateAuthority;}(think.middleware.base);exports.default = ValidateAuthority;