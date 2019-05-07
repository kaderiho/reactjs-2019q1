"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _react2 = require("redux-persist/integration/react");

var _ErrorBoundary = _interopRequireDefault(require("./components/ErrorBoundary/ErrorBoundary"));

var _reactRedux = require("react-redux");

var _movies = require("./store/actions/movies");

var _reactRouterDom = require("react-router-dom");

var _store = _interopRequireWildcard(require("./store/store"));

var _app = _interopRequireDefault(require("./app"));

var AppErrorComponent = function AppErrorComponent() {
  return _react.default.createElement("p", {
    className: "error--application"
  }, "Oops! Application currently is not available");
};

var Root =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Root, _Component);

  function Root() {
    (0, _classCallCheck2.default)(this, Root);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Root).apply(this, arguments));
  }

  (0, _createClass2.default)(Root, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getMoviesList();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_ErrorBoundary.default, {
        render: AppErrorComponent
      }, _react.default.createElement(_react2.PersistGate, {
        loading: null,
        persistor: _store.persistor
      }, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_app.default, null))));
    }
  }]);
  return Root;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMoviesList: function getMoviesList() {
      dispatch((0, _movies.GET_MOVIES_REQUEST)());
    }
  };
};

Root = (0, _reactRedux.connect)(null, mapDispatchToProps)(Root);
(0, _reactDom.hydrate)(_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, _react.default.createElement(Root, null)), document.getElementById('app'));