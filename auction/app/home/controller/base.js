'use strict';exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var 

Base = function (_think$controller$bas) {(0, _inherits3.default)(Base, _think$controller$bas);function Base() {(0, _classCallCheck3.default)(this, Base);return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));}
  /**
   * some base method in here
   */Base.prototype.
  init = function init() {var _think$controller$bas2;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    (_think$controller$bas2 = _think$controller$bas.prototype.init).call.apply(_think$controller$bas2, [this].concat(args));};return Base;}(think.controller.base);exports.default = Base;