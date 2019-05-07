"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Button = _interopRequireDefault(require("../Button/Button"));

var Header = function Header(_ref) {
  var isSearchButtonEnabled = _ref.isSearchButtonEnabled;
  return _react.default.createElement("header", null, _react.default.createElement("span", {
    className: "logoLink"
  }, "netflixroulette"), isSearchButtonEnabled && _react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, _react.default.createElement(_Button.default, {
    variant: "contained",
    color: "fourth",
    className: "header-searchButton"
  }, "Search")));
};

var _default = Header;
exports.default = _default;