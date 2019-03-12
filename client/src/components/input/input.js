import React from 'react';

import './input.scss';

const Input = props => (
    React.createElement('input', {
        className: 'input',
        ...props
    }, null)
);

export default Input;