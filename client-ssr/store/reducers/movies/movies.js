"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var initialState = [];

var movies = function movies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_MOVIES_SUCCESS':
      return [].concat((0, _toConsumableArray2.default)(state), (0, _toConsumableArray2.default)(action.payload));

    case 'GET_MOVIE_SUCCESS':
      return [].concat((0, _toConsumableArray2.default)(state), (0, _toConsumableArray2.default)(action.payload));

    default:
      return state;
  }
};

var _default = movies;
exports.default = _default;