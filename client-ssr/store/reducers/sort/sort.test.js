"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sort = _interopRequireDefault(require("./sort"));

describe('sort reducer', function () {
  it('Should handle SET_SORT_BY', function () {
    var action = {
      type: 'SET_SORT_BY',
      payload: {
        sortBy: 'rating'
      }
    };
    expect((0, _sort.default)('', action)).toEqual(action.payload.sortBy);
  });
});