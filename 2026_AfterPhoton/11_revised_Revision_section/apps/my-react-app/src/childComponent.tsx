import React from "react";

export default function ChildComponent (props) {

    return(
        <div>
            <h3> Child Component</h3>
            <h4> {props.data} </h4>
        </div>
    )
}