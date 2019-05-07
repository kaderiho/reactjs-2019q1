"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Button = function Button(_ref) {
  var _classNames;

  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      name = _ref.name;
  var buttonClass = (0, _classnames.default)('btn', className, "btn--".concat(size), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "btn--".concat(variant), variant), (0, _defineProperty2.default)(_classNames, "btn--".concat(color), color), _classNames));
  return _react.default.createElement("button", {
    className: buttonClass,
    onClick: onClick,
    type: type,
    name: name
  }, children);
};

var _default = Button;
exports.default = _default;