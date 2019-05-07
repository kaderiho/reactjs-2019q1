"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _list = require("../../utils/list");

var SortedList = function SortedList(Component) {
  return function (props) {
    var sortBy = props.sortBy,
        movies = props.movies;

    if (sortBy === 'release_date') {
      movies = (0, _list.sortByReleaseDate)(movies);
    }

    if (sortBy === 'rating') {
      movies = (0, _list.sortByRating)(movies);
    }

    return _react.default.createElement(Component, {
      movies: movies
    });
  };
};

var mapStateToProps = function mapStateToProps(_ref) {
  var sortBy = _ref.sortBy;
  return {
    sortBy: sortBy
  };
};

var composedSortedList = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, null), SortedList);
var _default = composedSortedList;
exports.default = _default;