"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchByField = exports.sortByRating = exports.sortByReleaseDate = void 0;

var sortByReleaseDate = function sortByReleaseDate(list) {
  return list.sort(function (a, b) {
    return new Date(b.release_date) - new Date(a.release_date);
  });
};

exports.sortByReleaseDate = sortByReleaseDate;

var sortByRating = function sortByRating(list) {
  return list.sort(function (a, b) {
    return a.vote_count - b.vote_count;
  });
};

exports.sortByRating = sortByRating;

var searchByTitle = function searchByTitle(list, search) {
  return list.filter(function (item) {
    return item['title'].toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
};

var searchByGenres = function searchByGenres(list, search) {
  return list.filter(function (item) {
    var genres = item['genres'].map(function (genre) {
      return genre.toLowerCase();
    }).join(' ');
    return genres.indexOf(search.toLowerCase()) !== -1;
  });
};

var searchByField = function searchByField(list, fieldName, search) {
  if (fieldName === 'title') {
    return searchByTitle(list, search);
  }

  if (fieldName === 'genres') {
    return searchByGenres(list, search);
  }
};

exports.searchByField = searchByField;