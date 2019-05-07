"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("./request"));

var HOST_URL = 'http://localhost:8080'; // GET movies list

var getList = function getList() {
  return (0, _request.default)({
    url: "".concat(HOST_URL, "/api/movies"),
    method: 'get'
  });
}; // GET movie


var getItem = function getItem(movieId) {
  return (0, _request.default)({
    url: "".concat(HOST_URL, "/api/movies/").concat(movieId),
    method: 'get'
  });
};

var MoviesAPI = {
  getList: getList,
  getItem: getItem
};
var _default = MoviesAPI;
exports.default = _default;