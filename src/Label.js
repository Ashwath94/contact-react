import React from 'react';

function Label(props) {
    return <label htmlFor={props.for}>{props.display}</label>
}

export default Label;
