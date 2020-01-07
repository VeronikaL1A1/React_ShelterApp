import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Button (props) {
    return (
        <div>
<button type={props.type} className={props.bootstrapClass + props.className}>{props.child}</button>
        </div>
    )
}

export default Button;