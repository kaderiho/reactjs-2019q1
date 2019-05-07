"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _enzyme = require("enzyme");

var buttonClickFn = jest.fn();
/**
 * Tests
 * 
 * - To match snapshot
 * - To match snapshot with passed props
 * - onClick should be called on button click
 */

describe('Button component', function () {
  it('Should render correctly with default props', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, null, "My button"));
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render correctly with passed props', function () {
    var buttonProps = {
      variant: 'transparent',
      children: 'My button',
      color: 'secondary',
      size: 'small'
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, buttonProps));
    expect(wrapper).toMatchSnapshot();
  });
  it('onClick handler should have been called', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      onClick: buttonClickFn
    }));
    wrapper.find('button.btn').simulate('click');
    expect(buttonClickFn).toHaveBeenCalled();
  });
});