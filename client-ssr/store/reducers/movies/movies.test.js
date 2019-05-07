"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _movies = _interopRequireDefault(require("./movies"));

describe('movies reducer', function () {
  it('Should handle GET_MOVIES_SUCCESS', function () {
    var mockedList = [{
      id: 0
    }];
    expect((0, _movies.default)([], {
      type: 'GET_MOVIES_SUCCESS',
      payload: mockedList
    })).toEqual([].concat(mockedList));
  });
});