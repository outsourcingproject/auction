'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var ObjectID = require('mongodb-core').BSON.ObjectID;var 

Bid = function (_Base) {(0, _inherits3.default)(Bid, _Base);function Bid() {var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Bid);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.
    schema = { 
      item: { 
        //ref to collection item._id
        type: ObjectID, 
        require: true }, 

      user: { 
        //ref to collection user.username
        type: String, 
        require: true }, 

      //出价金额
      value: { 
        type: Number, 
        require: true }, 

      createAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} }, 

      updateAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} } }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}Bid.prototype.



  afterSelect = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt('return', 
              ['sadf', 'sadf']);case 1:case 'end':return _context.stop();}}}, _callee, this);}));function afterSelect(_x) {return ref.apply(this, arguments);}return afterSelect;}();return Bid;}(_base2.default);exports.default = Bid;