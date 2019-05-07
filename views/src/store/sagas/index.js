"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _effects = require("redux-saga/effects");

var _movies = require("./movies");

var _marked =
/*#__PURE__*/
_regenerator.default.mark(rootSaga);

function rootSaga() {
  return _regenerator.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _movies.watchFetchMoviesList)(), (0, _movies.watchFetchMovie)()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

;