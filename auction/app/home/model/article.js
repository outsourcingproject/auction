'use strict';exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var ObjectID = require('mongodb-core').BSON.ObjectID;var 

Article = function (_Base) {(0, _inherits3.default)(Article, _Base);function Article() {var _temp, _this, _ret;(0, _classCallCheck3.default)(this, Article);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Base.call.apply(_Base, [this].concat(args))), _this), _this.
    schema = { 
      title: { 
        type: String, 
        require: true, 
        default: "" }, 

      content: { 
        type: String, 
        require: true, 
        default: "" }, 

      author: { 
        //ref to collection user.username
        type: String, 
        require: true }, 

      type: { 
        //ref to collection article_type.name
        type: String, 
        require: true }, 

      createAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} }, 

      updateAt: { 
        type: Date, 
        required: true, 
        default: function _default() {return new Date();} } }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);}return Article;}(_base2.default);exports.default = Article;