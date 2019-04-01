import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

/**
 * Tests
 * 
 * - To match snapshot
 * - Show error message in case of children error happened
 */

describe('ErrorBoundary component', () => {
    it('Should render correctly with default props', () => {
        const mockComponent = <div>My mock element</div>
        const wrapper = shallow(<ErrorBoundary>{mockComponent}</ErrorBoundary>);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should render error message', () => {
        const errorRenderMessage = <div>Oop! Something went wrong.</div>
        const FailedComponent = () => {
            throw new Error('Error happened!');
            return;
        };
        const wrapper = mount(
        <ErrorBoundary 
            render={() => errorRenderMessage }>
            <FailedComponent/>
        </ErrorBoundary>);

        expect(wrapper).toMatchSnapshot();
    })
})
