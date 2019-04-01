import React from 'react';
import { shallow , mount } from 'enzyme';
import Header from './Header';

/**
 * Tests
 * 
 * - To match snapshot
 */

describe('Header component', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});