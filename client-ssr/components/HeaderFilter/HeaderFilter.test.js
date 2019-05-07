"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _HeaderFilter = require("./HeaderFilter");

/**
 * Tests
 * 
 * - To match snapshot
 * - onFilterByHandler should be called if button is clicked
 * - onInputHandler should be called if input is changed
 * - Input value is changed correctly
 */
var initialProps = {
  onFilterByHandler: function onFilterByHandler() {},
  onSearchHandler: function onSearchHandler() {}
};

var component = _react.default.createElement(_HeaderFilter.HeaderFilter, initialProps);

describe('<HeaderFilter /> component', function () {
  it('Should render correctly', function () {
    var wrapper = (0, _enzyme.shallow)(component);
    expect(wrapper).toMatchSnapshot();
  });
  it('onFilterByHandler is called', function () {
    var wrapper = (0, _enzyme.mount)(component);
    var spy = jest.spyOn(wrapper.instance(), 'onFilterByHandler');
    wrapper.instance().forceUpdate();
    var filterButton = wrapper.find('button[name="title"]');
    filterButton.simulate('click');
    expect(spy).toBeCalled();
  });
  it('onInputHandler is called', function () {
    var wrapper = (0, _enzyme.mount)(component);
    var spy = jest.spyOn(wrapper.instance(), 'onInputHandler');
    wrapper.instance().forceUpdate();
    var filterInput = wrapper.find('input[name="searchFilter"]');
    filterInput.simulate('change', {
      target: {
        value: 'My new value'
      }
    });
    expect(spy).toBeCalled();
  }); // it('Input value is changed', () => {
  //     const wrapper = mount(component);
  //     const filterInput = wrapper.find('input[name="searchFilter"]');
  //     filterInput.instance().value = "My new value"
  //     filterInput.simulate('change');
  //     expect(wrapper.find('Input').prop('value')).toBe('My new value');
  // });
});