import React from 'react';
import classNames from 'classnames';

import './button.scss';

export default props => {
    const buttonSize = props.size || 'medium';
    const buttonClass = classNames('btn', props.className, `btn--${buttonSize}`,{
        [`btn--${props.variant}`]: props.variant,
        [`btn--${props.color}`]: props.color
    });

    return (
        <button className={buttonClass}>
            {props.children}
        </button>
    )
}