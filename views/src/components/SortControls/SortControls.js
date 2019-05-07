"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _sort = require("../../store/actions/sort");

var _reactRedux = require("react-redux");

var SortControls = function SortControls(_ref) {
  var sortBy = _ref.sortBy,
      onSortByHandler = _ref.onSortByHandler;
  return _react.default.createElement("div", {
    className: "sortControls"
  }, _react.default.createElement("span", {
    className: "sortControls-label"
  }, "Sort by"), _react.default.createElement(_Button.default, {
    className: (0, _classnames.default)("sortControls-control", {
      'sortControls-control--active': sortBy === 'release_date'
    }),
    onClick: function onClick() {
      onSortByHandler('release_date');
    },
    color: "transparent",
    size: "small"
  }, "Release date"), _react.default.createElement(_Button.default, {
    className: (0, _classnames.default)("sortControls-control", {
      'sortControls-control--active': sortBy === 'rating'
    }),
    onClick: function onClick() {
      onSortByHandler('rating');
    },
    color: "transparent",
    size: "small"
  }, "Rating"));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var sortBy = _ref2.sortBy;
  return {
    sortBy: sortBy
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSortByHandler: function onSortByHandler(sortBy) {
      dispatch((0, _sort.SET_SORT_BY)(sortBy));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SortControls);

exports.default = _default;