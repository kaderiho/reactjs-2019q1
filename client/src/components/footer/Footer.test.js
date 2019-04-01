import React from 'react';
import { shallow , mount } from 'enzyme';
import Footer from './Footer';

/**
 * Tests
 * 
 * - To match snapshot
 * - Logo link exists with correct URL
 */

describe('Footer component', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Link should has correct href', () => {
        const wrapper = mount(<Footer />);
        expect(wrapper.find('a[href="/"]')).toHaveLength(1);
    });
});