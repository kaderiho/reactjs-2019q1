"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _movies = require("../store/actions/movies");

var _redux = require("redux");

var _index = _interopRequireDefault(require("../store/reducers/index"));

var _template = _interopRequireDefault(require("./template"));

var _routes = _interopRequireDefault(require("./routes"));

var _app = _interopRequireDefault(require("../app"));

module.exports = function (req) {
  var store = (0, _redux.createStore)(_index.default);
  var requiredDataPromises = [];
  var context = {};

  _routes.default.some(function (route) {
    var match = (0, _reactRouterDom.matchPath)(req.path, route);
    if (match) requiredDataPromises.push(route.fetchData(match));
    return match;
  });

  return new Promise(function (resolve) {
    Promise.all(requiredDataPromises).then(function (requredData) {
      var _requredData = (0, _slicedToArray2.default)(requredData, 1),
          moviesList = _requredData[0];

      store.dispatch((0, _movies.GET_MOVIES_SUCCESS)(moviesList.data.data));
      var markup = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
        store: store
      }, _react.default.createElement(_reactRouterDom.StaticRouter, {
        context: context,
        location: req.url
      }, _react.default.createElement(_app.default, null))));
      var preloadedState = store.getState();
      resolve((0, _template.default)(markup, preloadedState));
    });
  });
};