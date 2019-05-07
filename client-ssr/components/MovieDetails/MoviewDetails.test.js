"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MovieDetails = _interopRequireDefault(require("./MovieDetails"));

/**
 * Tests:
 * 
 * - To match snapshot
 */
describe('<MoviewDetails /> component: ', function () {
  it('Should render correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_MovieDetails.default, null));
    expect(wrapper).toMatchSnapshot();
  });
});