import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({
    className,
    children,
    onClick,
    variant,
    color,
    name,
    size
}) => {
    const buttonSize = size || 'medium';
    const buttonClass = classNames('btn', className, `btn--${buttonSize}`, {
        [`btn--${variant}`]: variant,
        [`btn--${color}`]: color
    });

    return (
        <button 
            className={buttonClass} 
            onClick={onClick}
            name={name}>
            {children}
        </button>
    );
};

export default Button;