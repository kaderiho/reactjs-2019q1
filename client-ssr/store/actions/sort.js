"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_SORT_BY = void 0;

var SET_SORT_BY = function SET_SORT_BY(sortBy) {
  return {
    type: 'SET_SORT_BY',
    payload: {
      sortBy: sortBy
    }
  };
};

exports.SET_SORT_BY = SET_SORT_BY;