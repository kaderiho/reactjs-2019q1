"use strict";

var _date = require("./date");

describe('Date utils:', function () {
  test('Should return current year', function () {
    var checkedDate = new Date();
    expect((0, _date.getFullYear)(checkedDate)).toBe(new Date(checkedDate).getFullYear());
  });
});