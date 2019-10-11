import React from 'react';
import ResultItem from "./ResultItem";
import Button from "./Button";

function Result(props) {
    const resultItems = [];
    props.items.forEach((item,index) =>{
        resultItems.push(
            <ResultItem
                labelDisplay={item.label}
                value={item.value}
                key={index}
            />
        );
    });
    return <div className="result" id="result">
        {resultItems}
        <Button id="edit" display="EDIT" onClick={props.onEdit}/>
    </div>
}

export default Result;
