import React from 'react';
import { shallow } from 'enzyme';

import PagePlaceholder from './PagePlaceholder';

/**
 * Test
 * 
 * - To match snapshot
 */
describe('<PagePlaceholder /> component', () => {
    it('Should render correctly', () => {
        const PagePlaceholderMessage = 'Placeholder message';
        const wrapper = shallow(<PagePlaceholder PagePlaceholderMessage={PagePlaceholderMessage}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
