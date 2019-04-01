import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input';

const inputChangeFn = jest.fn();

/**
 * Tests:
 * 
 * - Snapshot match
 * - onChange handler call
 * - Label existing
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

    it('Label should exist in case of passed label text', () => {
        const wrapper = mount(<Input label="Some label" />);

        expect(wrapper.exists('.inputHolder-label')).toEqual(true);
    });
});