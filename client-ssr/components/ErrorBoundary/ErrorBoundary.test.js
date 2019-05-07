"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

/**
 * Tests
 * 
 * - To match snapshot
 * - Show error message in case of children error happened
 */
describe('ErrorBoundary component', function () {
  it('Should render correctly with default props', function () {
    var mockComponent = _react.default.createElement("div", null, "My mock element");

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_ErrorBoundary.default, null, mockComponent));
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render error message', function () {
    var errorRenderMessage = _react.default.createElement("div", null, "Oop! Something went wrong.");

    var FailedComponent = function FailedComponent() {
      throw new Error('Error happened!');
      return;
    };

    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ErrorBoundary.default, {
      render: function render() {
        return errorRenderMessage;
      }
    }, _react.default.createElement(FailedComponent, null)));
    expect(wrapper).toMatchSnapshot();
  });
});