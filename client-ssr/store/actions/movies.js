"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_MOVIES_ERROR = exports.GET_MOVIES_SUCCESS = exports.GET_MOVIES_REQUEST = exports.GET_MOVIE_ERROR = exports.GET_MOVIE_SUCCESS = exports.GET_MOVIE_REQUEST = void 0;

var GET_MOVIES_REQUEST = function GET_MOVIES_REQUEST() {
  return {
    type: 'GET_MOVIES_REQUEST'
  };
};

exports.GET_MOVIES_REQUEST = GET_MOVIES_REQUEST;

var GET_MOVIES_SUCCESS = function GET_MOVIES_SUCCESS(moviesList) {
  return {
    type: 'GET_MOVIES_SUCCESS',
    payload: moviesList
  };
};

exports.GET_MOVIES_SUCCESS = GET_MOVIES_SUCCESS;

var GET_MOVIES_ERROR = function GET_MOVIES_ERROR(error) {
  return {
    type: 'GET_MOVIES_ERROR',
    payload: new Error(error),
    error: true
  };
};

exports.GET_MOVIES_ERROR = GET_MOVIES_ERROR;

var GET_MOVIE_REQUEST = function GET_MOVIE_REQUEST(movieId) {
  return {
    type: 'GET_MOVIE_REQUEST',
    payload: {
      movieId: movieId
    }
  };
};

exports.GET_MOVIE_REQUEST = GET_MOVIE_REQUEST;

var GET_MOVIE_SUCCESS = function GET_MOVIE_SUCCESS(movie) {
  return {
    type: 'GET_MOVIE_SUCCESS',
    payload: {
      movie: movie
    }
  };
};

exports.GET_MOVIE_SUCCESS = GET_MOVIE_SUCCESS;

var GET_MOVIE_ERROR = function GET_MOVIE_ERROR(error) {
  return {
    type: 'GET_MOVIE_ERROR',
    payload: new Error(error),
    error: true
  };
};

exports.GET_MOVIE_ERROR = GET_MOVIE_ERROR;