"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullYear = void 0;

/**
 * Return current year based on passed date
 *  
 * @param {date} date - input date 
 */
var getFullYear = function getFullYear(date) {
  return new Date(date).getFullYear();
};

exports.getFullYear = getFullYear;