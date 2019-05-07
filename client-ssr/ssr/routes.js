"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

// import { GET_MOVIES_REQUEST, GET_MOVIE_REQUEST } from "../store/actions/movies";
var API_URL = 'http://reactjs-cdp.herokuapp.com/movies';
var _default = [{
  path: '/',
  fetchData: function fetchData() {
    // return GET_MOVIES_REQUEST();
    return _axios.default.get(API_URL);
  },
  successAction: 'GET_MOVIES_SUCCESS'
}, {
  path: '/film/:id',
  fetchData: function fetchData(moveId) {
    // return GET_MOVIE_REQUEST(moveId);
    return _axios.default.get("".concat(API_URL, "/").concat(movieId));
  },
  successAction: 'GET_MOVIE_SUCCESS'
}];
exports.default = _default;