import React from 'react';
import { shallow , mount } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should contain link element', () => {
        const wrapper = mount(<Footer />);
        expect(wrapper.exists('.logoLink')).toEqual(true);
    });

    it('Link should has correct href', () => {
        const wrapper = mount(<Footer />);

        expect(wrapper.exists({ href: '/'})).toEqual(true);
    });
});