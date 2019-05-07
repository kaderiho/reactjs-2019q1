"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _default = function _default(props) {
  if (props.error) {
    // When the loader has errored
    return _react.default.createElement("div", null, "Error! ", _react.default.createElement("button", {
      onClick: props.retry
    }, "Retry"));
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return _react.default.createElement("div", null, "Taking a long time... ", _react.default.createElement("button", {
      onClick: props.retry
    }, "Retry"));
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return _react.default.createElement("div", null, "Loading...");
  } else {
    // When the loader has just started
    return null;
  }
};

exports.default = _default;