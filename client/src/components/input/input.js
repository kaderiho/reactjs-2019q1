import React from 'react';

import './input.scss';

export default props => {
    return (
        <div className="inputControl">
            <input
                className="input"
                onChange={ev => { props.onChange(ev)}}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                type={props.type} 
                />
        </div>
    )
}