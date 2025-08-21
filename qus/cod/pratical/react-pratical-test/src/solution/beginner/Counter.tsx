import React, { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

    const IncrementFun = () =>{
        return (
            setCount(count+1)
        )
    };
    const DecrementFun = () =>{
        return (
            setCount(count - 1)
        )
    };

    return(
        <div> 
            <h3>Counter</h3>
            <div> {count}</div>
            <button onClick={IncrementFun} >Increment</button>
            <button onClick={DecrementFun} >Decrement</button>
        </div>
    )
}
export default Counter;