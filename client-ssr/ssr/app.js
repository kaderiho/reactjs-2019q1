"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _redux = require("redux");

var _index = _interopRequireDefault(require("../store/reducers/index"));

var _template = _interopRequireDefault(require("./template"));

var _app = _interopRequireDefault(require("../app"));

module.exports = function (req) {
  var store = (0, _redux.createStore)(_index.default);
  var context = {};
  var markup = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_reactRouterDom.StaticRouter, {
    context: context,
    location: req.url
  }, _react.default.createElement(_app.default, null))));
  var preloadedState = store.getState();
  return (0, _template.default)(markup, preloadedState);
};