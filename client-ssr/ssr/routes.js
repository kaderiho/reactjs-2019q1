"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var API_URL = 'http://reactjs-cdp.herokuapp.com/movies';
var _default = [{
  path: '/',
  exact: true,
  fetchData: function fetchData() {
    return _axios.default.get(API_URL);
  }
}, {
  path: '/film/:id',
  exact: true,
  fetchData: function fetchData(_ref) {
    var moviedId = _ref.id;
    return _axios.default.get("".concat(API_URL, "/").concat(moviedId));
  }
}];
exports.default = _default;