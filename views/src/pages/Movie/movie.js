"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireWildcard3(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _PagePlaceholder = _interopRequireDefault(require("../../components/PagePlaceholder/PagePlaceholder"));

var _MoviesList = _interopRequireDefault(require("../../components/MoviesList/MoviesList"));

var _Loading = _interopRequireDefault(require("../../components/Loading/Loading"));

var _Header = _interopRequireDefault(require("../../components/Header/Header"));

var _Footer = _interopRequireDefault(require("../../components/Footer/Footer"));

var _movies = require("../../store/actions/movies");

var _reactRedux = require("react-redux");

var LoadableMovieComponent = (0, _reactLoadable.default)((0, _defineProperty2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("../../components/MovieDetails/MovieDetails"));
    });
  },
  modules: ["../../components/MovieDetails/MovieDetails"],
  webpack: function webpack() {
    return [require.resolveWeak("../../components/MovieDetails/MovieDetails")];
  },
  loading: _Loading.default
}, "modules", ['MovieDetails']));

var MoviePage =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MoviePage, _Component);

  function MoviePage() {
    (0, _classCallCheck2.default)(this, MoviePage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MoviePage).apply(this, arguments));
  }

  (0, _createClass2.default)(MoviePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getMovie(this.props.match.params.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          movie = _this$props.movie,
          movies = _this$props.movies;
      if (!movie) return _react.default.createElement("div", {
        className: "page"
      });
      var movieGenre = movie.genres[0];
      var genreMovies = movies.filter(function (movie) {
        return movie.genres.indexOf(movieGenre) !== -1;
      });
      return _react.default.createElement("div", {
        className: "page"
      }, _react.default.createElement("div", {
        className: "headerWrapper"
      }, _react.default.createElement("div", {
        className: "headerInner"
      }, _react.default.createElement(_Header.default, {
        isSearchButtonEnabled: true
      }), _react.default.createElement(LoadableMovieComponent, movie))), _react.default.createElement("main", null, _react.default.createElement("div", {
        className: "subHeader"
      }, _react.default.createElement("span", {
        className: "filterResults"
      }, "Films by ", movie.genres[0], " genre")), movies.length ? _react.default.createElement(_MoviesList.default, {
        movies: genreMovies
      }) : _react.default.createElement(_PagePlaceholder.default, {
        placeholderMessage: "Not films found"
      })), _react.default.createElement(_Footer.default, null));
    }
  }]);
  return MoviePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  var movies = _ref.movies;
  return {
    movie: movies.filter(function (movie) {
      return movie.id === parseInt(ownProps.match.params.id, 10);
    })[0],
    movies: movies
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMovie: function getMovie(moveId) {
      dispatch((0, _movies.GET_MOVIE_REQUEST)(moveId));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MoviePage);

exports.default = _default;