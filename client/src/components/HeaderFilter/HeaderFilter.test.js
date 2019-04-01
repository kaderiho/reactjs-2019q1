import React from 'react';
import { shallow, mount } from 'enzyme';

import HeaderFilter from './HeaderFilter';

/**
 * Tests
 * 
 * - To match snapshot
 * - onFilterByHandler should be called if button is clicked
 * - onInputHandler should be called if input is changed
 * - Input value is changed correctly
 */

describe('<HeaderFilter /> component', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<HeaderFilter />);
        
        expect(wrapper).toMatchSnapshot();
    });

    it('onFilterByHandler is called', () => {
        const wrapper = mount(<HeaderFilter />);
        const spy = jest.spyOn(wrapper.instance(), 'onFilterByHandler');
        wrapper.instance().forceUpdate();
        
        const filterButton = wrapper.find('button[name="FilterByTitle"]');
        filterButton.simulate('click');
        expect(spy).toBeCalled();
    });

    it('onInputHandler is called', () => {
        const wrapper = mount(<HeaderFilter />);
        const spy = jest.spyOn(wrapper.instance(), 'onInputHandler');
        wrapper.instance().forceUpdate();

        const filterInput = wrapper.find('input[name="searchFilter"]');
        filterInput.simulate('change', { target: { value: 'My new value' }});
        expect(spy).toBeCalled();
    });

    it('Input value is changed', () => {
        const wrapper = mount(<HeaderFilter />);

        const filterInput = wrapper.find('input[name="searchFilter"]');
        filterInput.instance().value = "My new value"
        filterInput.simulate('change');

        expect(wrapper.find('Input').prop('value')).toBe('My new value');
    });
});