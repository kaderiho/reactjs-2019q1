"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMoviesList = fetchMoviesList;
exports.fetchMovie = fetchMovie;
exports.watchFetchMovie = watchFetchMovie;
exports.watchFetchMoviesList = watchFetchMoviesList;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _effects = require("redux-saga/effects");

var _movies = _interopRequireDefault(require("../../api/movies"));

var _movies2 = require("../actions/movies");

var _marked =
/*#__PURE__*/
_regenerator.default.mark(fetchMoviesList),
    _marked2 =
/*#__PURE__*/
_regenerator.default.mark(fetchMovie),
    _marked3 =
/*#__PURE__*/
_regenerator.default.mark(watchFetchMovie),
    _marked4 =
/*#__PURE__*/
_regenerator.default.mark(watchFetchMoviesList);

function fetchMoviesList() {
  var res;
  return _regenerator.default.wrap(function fetchMoviesList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_movies.default.getList);

        case 3:
          res = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _movies2.GET_MOVIES_SUCCESS)(res.data.data));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return (0, _effects.put)((0, _movies2.GET_MOVIES_ERROR)(_context.t0));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function fetchMovie(_ref) {
  var payload, res;
  return _regenerator.default.wrap(function fetchMovie$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = _ref.payload;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(_movies.default.getItem, payload.movieId);

        case 4:
          res = _context2.sent;
          _context2.next = 7;
          return (0, _effects.put)((0, _movies2.GET_MOVIE_SUCCESS)(res.data));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 13;
          return (0, _effects.put)((0, _movies2.GET_MOVIE_ERROR)(_context2.t0));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}

function watchFetchMovie() {
  return _regenerator.default.wrap(function watchFetchMovie$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)('GET_MOVIE_REQUEST', fetchMovie);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchFetchMoviesList() {
  return _regenerator.default.wrap(function watchFetchMoviesList$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeEvery)('GET_MOVIES_REQUEST', fetchMoviesList);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

;