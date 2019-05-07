"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _date = require("../../utils/date");

var MovieDetails = function MovieDetails(_ref) {
  var release_date = _ref.release_date,
      vote_average = _ref.vote_average,
      poster_path = _ref.poster_path,
      overview = _ref.overview,
      runtime = _ref.runtime,
      title = _ref.title;
  return _react.default.createElement("div", {
    className: "movieDetails"
  }, _react.default.createElement("img", {
    className: "movieDetails-image",
    src: poster_path
  }), _react.default.createElement("div", {
    className: "movieDetailsDescription"
  }, _react.default.createElement("h1", {
    className: "movieDetailsDescription-title"
  }, _react.default.createElement("span", {
    className: "movieDetailsDescription-titleText"
  }, title), ' ', _react.default.createElement("span", {
    className: "movieDetailsDescription-raiting"
  }, vote_average)), _react.default.createElement("span", {
    className: "movieDetailsDescription-releaseDate"
  }, (0, _date.getFullYear)(release_date)), _react.default.createElement("span", {
    className: "movieDetailsDescription-runtime"
  }, runtime, " min"), _react.default.createElement("p", {
    className: "movieDetailsDescription-overview"
  }, overview)));
};

var _default = MovieDetails;
exports.default = _default;