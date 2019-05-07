"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _MoviesListCard = _interopRequireDefault(require("../MoviesListCard/MoviesListCard"));

var MoviesList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MoviesList, _React$Component);

  function MoviesList() {
    (0, _classCallCheck2.default)(this, MoviesList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MoviesList).apply(this, arguments));
  }

  (0, _createClass2.default)(MoviesList, [{
    key: "render",
    value: function render() {
      var movies = this.props.movies;

      if (!movies.length) {
        return '';
      }

      return _react.default.createElement("div", {
        className: "moviesList"
      }, movies.map(function (movie) {
        return _react.default.createElement(_MoviesListCard.default, (0, _extends2.default)({
          key: movie.id
        }, movie));
      }));
    }
  }]);
  return MoviesList;
}(_react.default.Component);

;
var _default = MoviesList;
exports.default = _default;