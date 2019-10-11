import React from 'react';

function InputElements(props) {
    return <input type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        title={props.title}
        required
        pattern={props.pattern}
        minLength={props.minlength}
        maxLength={props.maxlength}
        onChange={props.onChange}
        value={props.value}
    ></input>
  }


export default InputElements;
