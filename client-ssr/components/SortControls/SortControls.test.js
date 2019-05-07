"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SortControls = _interopRequireDefault(require("./SortControls"));

/**
 * Tests
 * 
 * - To match snapshot
 * - TODO: check 'sortControls-control--active' when filter button is clicked
 */
describe('<SortControls /> component', function () {
  it('Should render correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_SortControls.default, null));
    expect(wrapper).toMatchSnapshot();
  });
});