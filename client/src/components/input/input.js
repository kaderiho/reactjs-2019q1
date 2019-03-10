import React from 'react';

import './input.scss';

const Input = props => {
    return (
        React.createElement('input', {
            className: 'input',
            ...props
        }, null)
    );
}

export default Input;