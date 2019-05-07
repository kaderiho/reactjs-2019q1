"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Header = _interopRequireDefault(require("./Header"));

/**
 * Tests
 * 
 * - To match snapshot
 */
describe('Header component', function () {
  it('Should render correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Header.default, null));
    expect(wrapper).toMatchSnapshot();
  });
});