"use strict";

var _sort = require("./sort");

describe('Sort actions', function () {
  it('Should create an action to set "sortBy"', function () {
    var sortBy = 'rating';
    var action = {
      type: 'SET_SORT_BY',
      payload: {
        sortBy: sortBy
      }
    };
    expect((0, _sort.SET_SORT_BY)(sortBy)).toEqual(action);
  });
});