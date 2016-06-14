'use strict';exports.__esModule = true;var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var ObjectID = require('mongodb-core').BSON.ObjectID;var 

Role = function (_Base) {(0, _inherits3.default)(Role, _Base);function Role() {var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Role);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.
    schema = { 
      name: { 
        required: true, 
        default: '', 
        unique: true }, 

      desc: { 
        required: true, 
        default: '' }, 

      //继承那些角色的权限
      extend: { 
        //ref to collection Role.name
        type: [String], 
        required: true, 
        default: [] }, 

      authorities: { 
        default: [], 
        type: [ObjectID] }, 

      createAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} }, 

      updateAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} } }, _this.



    indexes = { 
      name: { $unique: 1 } }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}

  /**
   *
   * @param name
   * @param desc
   * @param extend {[String]}
   * @param authorities
   * @returns {*} true if success, otherwise err string
   */Role.prototype.
  addRole = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(name) {var desc = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];var extend = arguments.length <= 2 || arguments[2] === undefined ? ['anonymous', 'registered'] : arguments[2];var authorities = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];var 
      result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.thenAdd({ name: name, desc: desc, extend: extend, authorities: authorities }, { name: name });case 2:result = _context.sent;if (!(
              result.type == 'add')) {_context.next = 7;break;}return _context.abrupt('return', 
              true);case 7:return _context.abrupt('return', 

              'ROLE_ALREADY_EXIST');case 8:case 'end':return _context.stop();}}}, _callee, this);}));function addRole(_x, _x2, _x3, _x4) {return ref.apply(this, arguments);}return addRole;}();



  /**
   * TODO: del other role's extend
   * TODO: del user's role, if none, should assign to what
   * @param name {String}
   * @returns {Promise}
   */Role.prototype.
  delRole = function delRole(name) {
    return this.where({ name: name }).delete();};


  /**
   *
   * @param name {String} name of role
   * @param authorities {ObjectID} authorities' name
   * @returns {Promise}
   */Role.prototype.
  addAuthorities = function addAuthorities(name) {for (var _len2 = arguments.length, authorities = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {authorities[_key2 - 1] = arguments[_key2];}
    var role = this.where({ name: name }).find();
    for (var _iterator = authorities, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {var _ref;if (_isArray) {if (_i >= _iterator.length) break;_ref = _iterator[_i++];} else {_i = _iterator.next();if (_i.done) break;_ref = _i.value;}var authority = _ref;

      if (!role.authorities.includes(authority)) {
        role.authorities.push(authority);}}


    return this.where({ name: name }).update({ authorities: authorities });};


  /**
   *
   * @param name {String} name of role
   * @param authorities {String} authorities' name
   * @returns {Promise}
   */Role.prototype.
  rmAuthorities = function rmAuthorities(name) {for (var _len3 = arguments.length, authorities = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {authorities[_key3 - 1] = arguments[_key3];}

    var role = this.where({ name: name }).find();
    for (var _iterator2 = authorities, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {var _ref2;if (_isArray2) {if (_i2 >= _iterator2.length) break;_ref2 = _iterator2[_i2++];} else {_i2 = _iterator2.next();if (_i2.done) break;_ref2 = _i2.value;}var authority = _ref2;
      var index = role.authorities.indexOf(authority);
      if (index >= 0) {
        role.authorities.slice(index, 1);}}


    return this.where({ name: name }).update({ authorities: authorities });};


  /**
   *
   * @param name {String}
   * @param newName {String}
   * @returns {Promise}
   */Role.prototype.
  changeName = function changeName(name, newName) {
    return this.where({ name: name }).update({ name: newName });};


  /**
   *
   * @param name {String}
   * @param desc {desc}
   * @returns {Promise}
   */Role.prototype.
  changeDesc = function changeDesc(name, desc) {
    return this.where({ name: name }).update({ desc: desc });};


  /**
   *
   * @param name {String} name of role
   * @returns {Promise<[Authority]>} authority's array
   */Role.prototype.
  getRoleAuthorities = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(name) {var _this2 = this;var 
      authorityModel, 

      addAuthorities, 














      getAuthorities;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:authorityModel = think.model('authority', null, 'home');addAuthorities = function addAuthorities(arr, au) {for (var _iterator3 = au, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {var _ref3;if (_isArray3) {if (_i3 >= _iterator3.length) break;_ref3 = _iterator3[_i3++];} else {_i3 = _iterator3.next();if (_i3.done) break;_ref3 = _i3.value;}var i = _ref3;var has = false;for (var _iterator4 = arr, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {var _ref4;if (_isArray4) {if (_i4 >= _iterator4.length) break;_ref4 = _iterator4[_i4++];} else {_i4 = _iterator4.next();if (_i4.done) break;_ref4 = _i4.value;}var j = _ref4;if (i.name == j.name) {has = true;break;}}if (!has) {arr.push(i);}}};getAuthorities = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(name) {var 
                  role, 



                  authorities, _iterator5, _isArray5, _i5, _ref5, 
                  e, _iterator6, _isArray6, _i6, _ref6, 


                  aName;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return _this2.where({ name: name }).find();case 2:role = _context2.sent;if (!think.isEmpty(role)) {_context2.next = 5;break;}return _context2.abrupt('return', []);case 5:authorities = [];_iterator5 = role.extend, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);case 7:if (!_isArray5) {_context2.next = 13;break;}if (!(_i5 >= _iterator5.length)) {_context2.next = 10;break;}return _context2.abrupt('break', 25);case 10:_ref5 = _iterator5[_i5++];_context2.next = 17;break;case 13:_i5 = _iterator5.next();if (!_i5.done) {_context2.next = 16;break;}return _context2.abrupt('break', 25);case 16:_ref5 = _i5.value;case 17:e = _ref5;_context2.t0 = authorities;_context2.next = 21;return getAuthorities(e);case 21:_context2.t1 = _context2.sent;addAuthorities(_context2.t0, _context2.t1);case 23:_context2.next = 7;break;case 25:_iterator6 = role.authorities, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);case 26:if (!_isArray6) {_context2.next = 32;break;}if (!(_i6 >= _iterator6.length)) {_context2.next = 29;break;}return _context2.abrupt('break', 45);case 29:_ref6 = _iterator6[_i6++];_context2.next = 36;break;case 32:_i6 = _iterator6.next();if (!_i6.done) {_context2.next = 35;break;}return _context2.abrupt('break', 45);case 35:_ref6 = _i6.value;case 36:aName = _ref6;_context2.t2 = 
                          authorities;_context2.next = 40;return authorityModel.where({ name: aName }).find();case 40:_context2.t3 = _context2.sent;_context2.t4 = [_context2.t3];addAuthorities(_context2.t2, _context2.t4);case 43:_context2.next = 26;break;case 45:return _context2.abrupt('return', 

                          authorities);case 46:case 'end':return _context2.stop();}}}, _callee2, _this2);}));return function getAuthorities(_x9) {return ref.apply(this, arguments);};}();return _context3.abrupt('return', 


              getAuthorities(name));case 4:case 'end':return _context3.stop();}}}, _callee3, this);}));function getRoleAuthorities(_x8) {return ref.apply(this, arguments);}return getRoleAuthorities;}();return Role;}(_base2.default);exports.default = Role;