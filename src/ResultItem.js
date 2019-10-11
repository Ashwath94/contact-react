import React from "react";

function ResultItem(props) {
    return <div className="item">
        <span className="label">{props.labelDisplay}: </span>
        <span id="value">{props.value}</span>
    </div>
}
export default ResultItem;