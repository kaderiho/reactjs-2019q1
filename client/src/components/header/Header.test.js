import React from 'react';
import { shallow , mount } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should contain link element', () => {
        const wrapper = mount(<Header />);
        expect(wrapper.exists('.logoLink')).toEqual(true);
    });

    it('Should contain search button', () => {
        const wrapper = mount(<Header />);
        expect(wrapper.exists('.header-searchButton')).toEqual(true);
    });
});