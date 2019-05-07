"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _queryString = _interopRequireDefault(require("query-string"));

var _list = require("../../utils/list");

var _PagePlaceholder = _interopRequireDefault(require("../../components/PagePlaceholder/PagePlaceholder"));

var _ErrorBoundary = _interopRequireDefault(require("../../components/ErrorBoundary/ErrorBoundary"));

var _HeaderFilter = _interopRequireDefault(require("../../components/HeaderFilter/HeaderFilter"));

var _SortControls = _interopRequireDefault(require("../../components/SortControls/SortControls"));

var _MoviesList = _interopRequireDefault(require("../../components/MoviesList/MoviesList"));

var _SortedList = _interopRequireDefault(require("../../hoc/SortedList/SortedList"));

var _Header = _interopRequireDefault(require("../../components/Header/Header"));

var _Footer = _interopRequireDefault(require("../../components/Footer/Footer"));

var FilterErrorComponent = function FilterErrorComponent() {
  return _react.default.createElement("p", {
    className: "error--application"
  }, "Oops! Filter currently is not available");
};

var MainPage =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MainPage, _Component);

  function MainPage() {
    (0, _classCallCheck2.default)(this, MainPage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MainPage).apply(this, arguments));
  }

  (0, _createClass2.default)(MainPage, [{
    key: "render",
    value: function render() {
      var _queryString$parse = _queryString.default.parse(this.props.location.search),
          searchStr = _queryString$parse.searchStr,
          searchBy = _queryString$parse.searchBy;

      var SortedMoviesList = (0, _SortedList.default)(_MoviesList.default);
      var movies = this.props.movies;

      if (searchBy && searchStr) {
        movies = (0, _list.searchByField)(movies, searchBy, searchStr);
      }

      return _react.default.createElement("div", {
        className: "page"
      }, _react.default.createElement("div", {
        className: "headerWrapper"
      }, _react.default.createElement("div", {
        className: "headerInner"
      }, _react.default.createElement(_Header.default, {
        isSearchButtonEnabled: false
      }), _react.default.createElement(_ErrorBoundary.default, {
        render: FilterErrorComponent
      }, _react.default.createElement(_HeaderFilter.default, null)))), _react.default.createElement("main", null, _react.default.createElement("div", {
        className: "subHeader"
      }, _react.default.createElement("span", {
        className: "filterResults"
      }, movies.length, " movies found"), _react.default.createElement(_SortControls.default, null)), movies.length ? _react.default.createElement(SortedMoviesList, {
        movies: movies
      }) : _react.default.createElement(_PagePlaceholder.default, {
        placeholderMessage: "Not films found"
      })), _react.default.createElement(_Footer.default, null));
    }
  }]);
  return MainPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var movies = _ref.movies;
  return {
    movies: movies
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(MainPage);

exports.default = _default;