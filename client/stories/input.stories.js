import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/components/Input/Input';

storiesOf('Input', module).add('All inputs', () => (
    <div style={{ width: '500px' }}>
        <p>Basic input:</p>
        <Input placeholder="Type your text" />
    </div>
));
