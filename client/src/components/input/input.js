import React from 'react';

import './Input.scss';

const Input = props => {
    let { label, ...input } = props;

    return (
        <div className="inputHolder">
            {props.label && 
            <label 
                className="inputHolder-label" 
                htmlFor={props.name}>
                {props.label}
            </label>}
            <input 
                className="inputHolder-input"
                {...input}
            />
        </div>
    )
}

export default Input;