import React from 'react';

import './Input.scss';

const Input = props => {
    const { label, ...input } = props;

    return (
        <div className="inputHolder">
            {label && (
                <label className="inputHolder-label" htmlFor={props.name}>
                    {label}
                </label>
            )}
            <input className="inputHolder-input" {...input} />
        </div>
    );
};

export default Input;
