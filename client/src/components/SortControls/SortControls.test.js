import React from 'react';
import { shallow } from 'enzyme';

import SortControls from './SortControls';

/**
 * Tests
 * 
 * - To match snapshot
 * - TODO: check 'sortControls-control--active' when filter button is clicked
 */
describe('<SortControls /> component', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<SortControls />);

        expect(wrapper).toMatchSnapshot();
    });
});