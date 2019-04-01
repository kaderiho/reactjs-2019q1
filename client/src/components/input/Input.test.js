import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input';

const inputChangeFn = jest.fn();

/**
 * Tests:
 * 
 * - To match snapshot
 * - Input onChange handler is called
 */
describe('<Input /> component', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Input />);

        expect(wrapper).toMatchSnapshot();
    });

    it('onChange handler shoud be called', () => {
        const wrapper = mount(<Input onChange={inputChangeFn} />);

        wrapper.find('input').simulate('change');

        expect(inputChangeFn).toHaveBeenCalled();
    });
});