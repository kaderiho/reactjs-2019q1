import React from 'react';
import classNames from 'classnames';

import './button.scss';

const Button = ({ 
    className,
    children,
    variant, 
    color, 
    size
}) => {
    const buttonSize = size || 'medium';
    const buttonClass = classNames('btn', className, `btn--${buttonSize}`, {
        [`btn--${variant}`]: variant,
        [`btn--${color}`]: color
    });

    return (
        React.createElement('button', { 
            className: buttonClass 
        }, children)
    );
};

export default Button;