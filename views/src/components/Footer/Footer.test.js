"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Footer = _interopRequireDefault(require("./Footer"));

/**
 * Tests
 * 
 * - To match snapshot
 * - Logo link exists with correct URL
 */
describe('Footer component', function () {
  it('Should render correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Footer.default, null));
    expect(wrapper).toMatchSnapshot();
  });
  it('Link should has correct href', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Footer.default, null));
    expect(wrapper.find('a[href="/"]')).toHaveLength(1);
  });
});