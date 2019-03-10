import React from 'react';
import classNames from 'classnames';

import './button.scss';

const Button = props => {
    const buttonSize = props.size || 'medium';
    const buttonClass = classNames('btn', props.className, `btn--${buttonSize}`, {
        [`btn--${props.variant}`]: props.variant,
        [`btn--${props.color}`]: props.color
    });

    return (
        React.createElement('button', { 
            className: buttonClass 
        }, props.children)
    );
}

export default Button;