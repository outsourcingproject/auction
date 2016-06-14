'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var ObjectID = require('mongodb-core').BSON.ObjectID;var 

ItemGroup = function (_Base) {(0, _inherits3.default)(ItemGroup, _Base);function ItemGroup() {var _temp, _this, _ret;(0, _classCallCheck3.default)(this, ItemGroup);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.
    schema = { 
      name: { 
        type: String, 
        require: true, 
        unique: true, 
        default: '' }, 

      desc: { 
        type: String, 
        require: true, 
        default: '' }, 

      no: { 
        type: Number, 
        require: true, 
        unique: true, 
        default: function _default() {
          return _this.max('no') + 1;} }, 



      createAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} }, 

      updateAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} } }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}ItemGroup.prototype.



  beforeAdd = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {var 

      groups;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:data = _Base.prototype.beforeAdd.call(this, data);_context.next = 3;return this.select();case 3:groups = _context.sent;
              data.no = groups.reduce(function (pre, curr) {return pre > +curr.no ? pre : +curr.no || pre;}, 0) + 1;return _context.abrupt('return', 
              data);case 6:case 'end':return _context.stop();}}}, _callee, this);}));function beforeAdd(_x) {return ref.apply(this, arguments);}return beforeAdd;}();return ItemGroup;}(_base2.default);exports.default = ItemGroup;