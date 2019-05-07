"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Input = _interopRequireDefault(require("./Input"));

var inputChangeFn = jest.fn();
/**
 * Tests:
 * 
 * - To match snapshot
 * - Input onChange handler is called
 */

describe('<Input /> component', function () {
  it('Should render correctly', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.default, null));
    expect(wrapper).toMatchSnapshot();
  });
  it('onChange handler shoud be called', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.default, {
      onChange: inputChangeFn
    }));
    wrapper.find('input').simulate('change');
    expect(inputChangeFn).toHaveBeenCalled();
  });
});