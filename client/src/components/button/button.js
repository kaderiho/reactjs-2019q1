import React from 'react';
import classNames from 'classnames';

import './Button.scss';

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

    return <button className={buttonClass}>{children}</button>
};

export default Button;