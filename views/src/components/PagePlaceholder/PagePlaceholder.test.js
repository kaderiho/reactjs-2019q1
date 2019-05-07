"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _PagePlaceholder = _interopRequireDefault(require("./PagePlaceholder"));

/**
 * Test
 * 
 * - To match snapshot
 */
describe('<PagePlaceholder /> component', function () {
  it('Should render correctly', function () {
    var PagePlaceholderMessage = 'Placeholder message';
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_PagePlaceholder.default, {
      PagePlaceholderMessage: PagePlaceholderMessage
    }));
    expect(wrapper).toMatchSnapshot();
  });
});