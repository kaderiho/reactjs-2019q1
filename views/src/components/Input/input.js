"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var Input = function Input(props) {
  var label = props.label,
      input = (0, _objectWithoutProperties2.default)(props, ["label"]);
  return _react.default.createElement("div", {
    className: "inputHolder"
  }, props.label && _react.default.createElement("label", {
    className: "inputHolder-label",
    htmlFor: props.name
  }, props.label), _react.default.createElement("input", (0, _extends2.default)({
    className: "inputHolder-input"
  }, input)));
};

var _default = Input;
exports.default = _default;