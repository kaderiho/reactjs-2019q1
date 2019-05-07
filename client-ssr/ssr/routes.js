"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _movies = require("../store/actions/movies");

var _default = [{
  path: '/',
  fetchData: function fetchData() {
    return (0, _movies.GET_MOVIES_REQUEST)();
  }
}, {
  path: '/film/:id',
  fetchData: function fetchData(moveId) {
    return (0, _movies.GET_MOVIE_REQUEST)(moveId);
  }
}];
exports.default = _default;