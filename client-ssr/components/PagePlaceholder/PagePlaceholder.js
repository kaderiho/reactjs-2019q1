"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var PagePlaceholder = function PagePlaceholder(_ref) {
  var placeholderMessage = _ref.placeholderMessage;
  return _react.default.createElement("div", {
    className: "emptyMoviesFilmList"
  }, placeholderMessage);
};

var _default = PagePlaceholder;
exports.default = _default;