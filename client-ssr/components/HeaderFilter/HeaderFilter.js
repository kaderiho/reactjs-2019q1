"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderFilter = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _queryString = _interopRequireDefault(require("query-string"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Input = _interopRequireDefault(require("../Input/Input"));

var HeaderFilter =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HeaderFilter, _Component);

  function HeaderFilter() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, HeaderFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(HeaderFilter)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      searchStr: '',
      searchBy: ''
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputHandler", function (ev) {
      _this.setState({
        searchStr: ev.target.value
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onFilterByHandler", function (ev) {
      _this.setState({
        searchBy: ev.target.name
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSearchHandler", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          searchStr = _this$state.searchStr,
          searchBy = _this$state.searchBy;
      var search = {};

      if (searchStr) {
        search['searchStr'] = searchStr;
      }

      if (searchBy) {
        search['searchBy'] = searchBy;
      }

      if (searchStr || searchBy) {
        _this.props.history.push({
          pathname: '/search/',
          search: "?".concat(_queryString.default.stringify(search))
        });
      }
    });
    return _this;
  }

  (0, _createClass2.default)(HeaderFilter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _queryString$parse = _queryString.default.parse(this.props.location.search),
          searchStr = _queryString$parse.searchStr,
          searchBy = _queryString$parse.searchBy;

      this.setState({
        searchStr: searchStr || '',
        searchBy: searchBy || ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          searchStr = _this$state2.searchStr,
          searchBy = _this$state2.searchBy;
      return _react.default.createElement("div", {
        className: "headerFilter"
      }, _react.default.createElement("form", {
        onSubmit: this.onSearchHandler
      }, _react.default.createElement("p", {
        className: "headerFilter-title"
      }, "Find your movie"), _react.default.createElement(_Input.default, {
        placeholder: "Type movie name here",
        value: searchStr,
        onChange: this.onInputHandler,
        name: "searchFilter",
        id: "searchFilter"
      }), _react.default.createElement("div", {
        className: "headerSubFilter"
      }, _react.default.createElement("span", {
        className: "headerSubFilter-label"
      }, "Search by"), _react.default.createElement(_Button.default, {
        className: "headerSubFilter-button",
        onClick: this.onFilterByHandler,
        name: "title",
        color: searchBy === 'title' ? 'secondary' : 'third',
        size: "small"
      }, "Title"), _react.default.createElement(_Button.default, {
        className: "headerSubFilter-button",
        onClick: this.onFilterByHandler,
        name: "genres",
        color: searchBy === 'genres' ? 'secondary' : 'third',
        size: "small"
      }, "Genre"), _react.default.createElement(_Button.default, {
        className: "headerSubFilter-searchButton",
        onClick: this.onSearchHandler,
        color: "secondary",
        type: "submit"
      }, "Search"))));
    }
  }]);
  return HeaderFilter;
}(_react.Component);

exports.HeaderFilter = HeaderFilter;
;

var _default = (0, _reactRouterDom.withRouter)(HeaderFilter);

exports.default = _default;