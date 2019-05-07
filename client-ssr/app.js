"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Movie = _interopRequireDefault(require("./pages/Movie/Movie"));

var _NotFound = _interopRequireDefault(require("./pages/NotFound/NotFound"));

var _Main = _interopRequireDefault(require("./pages/Main/Main"));

var _default = function _default() {
  return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: _Main.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/search/:searchFilter",
    component: _Main.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/search/",
    component: _Main.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/film/:id",
    component: _Movie.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: _NotFound.default
  }));
};

exports.default = _default;