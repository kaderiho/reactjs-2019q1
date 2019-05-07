"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var actions = _interopRequireWildcard(require("./movies"));

describe('Movies actions', function () {
  it('Should create an action to retrieve movies', function () {
    var expectedAction = {
      type: 'GET_MOVIES_REQUEST'
    };
    expect(actions.GET_MOVIES_REQUEST()).toEqual(expectedAction);
  });
  it('Should create an action to successfully retrieved movies', function () {
    var moviesList = [{
      id: 0
    }];
    var expectedAction = {
      type: 'GET_MOVIES_SUCCESS',
      payload: moviesList
    };
    expect(actions.GET_MOVIES_SUCCESS(moviesList)).toEqual(expectedAction);
  });
  it('Should create an action to failed retrieve movies', function () {
    var errorMessage = 'The request is failed';
    var error = new Error(errorMessage);
    var expectedAction = {
      type: 'GET_MOVIES_ERROR',
      payload: error,
      error: true
    };
    expect(actions.GET_MOVIES_ERROR(errorMessage)).toEqual(expectedAction);
  });
});