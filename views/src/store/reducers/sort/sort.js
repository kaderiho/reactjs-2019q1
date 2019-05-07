"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var initialState = 'release_date';

var sortBy = function sortBy() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_SORT_BY':
      return action.payload.sortBy;

    default:
      return state;
  }
};

var _default = sortBy;
exports.default = _default;