import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    className,
    children,
    onClick,
    name,
}) => {
    const buttonClass = classNames('btn', className, `btn--${size}`, {
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