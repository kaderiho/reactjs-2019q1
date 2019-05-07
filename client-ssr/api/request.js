"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var request = function request(_ref) {
  var url = _ref.url,
      method = _ref.method;
  return _axios.default[method](url);
};

var _default = request;
exports.default = _default;