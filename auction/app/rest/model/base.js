"use strict";exports.__esModule = true;var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Base = function (_think$model$mongo) {(0, _inherits3.default)(Base, _think$model$mongo);function Base() {(0, _classCallCheck3.default)(this, Base);return (0, _possibleConstructorReturn3.default)(this, _think$model$mongo.apply(this, arguments));}Base.prototype.
  beforeUpdate = function beforeUpdate(data) {
    data.updateAt = new Date();
    return data;};Base.prototype.


  beforeAdd = function beforeAdd(data) {
    data.updateAt = new Date();
    data.createAt = new Date();
    return data;};return Base;}(think.model.mongo);exports.default = Base;