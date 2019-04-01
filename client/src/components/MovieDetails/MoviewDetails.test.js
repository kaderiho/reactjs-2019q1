import React from 'react';
import { shallow } from 'enzyme';

import MoviewDetails from './MovieDetails';

/**
 * Tests:
 * 
 * - Match snapshot
 */
describe('<MoviewDetails /> component: ', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<MoviewDetails />);

        expect(wrapper).toMatchSnapshot();
    });
});
