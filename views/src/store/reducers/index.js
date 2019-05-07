"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _movies = _interopRequireDefault(require("./movies/movies"));

var _sort = _interopRequireDefault(require("./sort/sort"));

var _default = (0, _redux.combineReducers)({
  movies: _movies.default,
  sortBy: _sort.default
});

exports.default = _default;