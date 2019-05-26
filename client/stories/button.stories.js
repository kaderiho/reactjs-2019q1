import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button/Button';

storiesOf('Button', module).add('All buttons', () => (
    <div>
        <p>Colors</p>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="third">Third</Button>
        <p>Sizes:</p>
        <Button size="small" color="secondary">
            Small
        </Button>
        <Button size="medium" color="secondary">
            Medium
        </Button>
    </div>
));
