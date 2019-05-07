"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _date = require("../../utils/date");

var MoviesListCard = function MoviesListCard(_ref) {
  var release_date = _ref.release_date,
      poster_path = _ref.poster_path,
      genres = _ref.genres,
      title = _ref.title,
      id = _ref.id;
  return _react.default.createElement("div", {
    className: "moviesList-itemList"
  }, _react.default.createElement(_reactRouterDom.Link, {
    to: "/film/".concat(id)
  }, _react.default.createElement("span", {
    className: "moviesList-itemListLink",
    style: {
      background: "url(".concat(poster_path, ") center top no-repeat"),
      backgroundSize: 'cover'
    }
  })), _react.default.createElement("div", {
    className: "moviesList-itemListTitle"
  }, _react.default.createElement("span", {
    className: "moviesList-itemListName"
  }, title), _react.default.createElement("span", {
    className: "moviesList-itemListDate"
  }, (0, _date.getFullYear)(release_date))), _react.default.createElement("div", {
    className: "moviesList-itemListDescription"
  }, genres.join(' & ')));
};

var _default = MoviesListCard;
exports.default = _default;