import React from 'react';
import Button from './Button';
import { shallow, mount } from 'enzyme';

const buttonClickFn = jest.fn();

describe('Button component', () => {
    it('Should render correctly with default props', () => {
        const wrapper = shallow(<Button>My button</Button>);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should render correctly with passed props', () => {
        const buttonProps = {
            variant: 'transparent',
            children: 'My button',
            color: 'secondary',
            size: 'small'
        };
        const wrapper = shallow(<Button {...buttonProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('onClick handler should have been called', () => {
        const wrapper = mount(<Button onClick={buttonClickFn} />);

        wrapper.find('button.btn').simulate('click');

        expect(buttonClickFn).toHaveBeenCalled();
    });
});


