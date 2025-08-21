import React from "react";
function TryMap () {
    const fruits = ['mango','banana', 'Orange', 'Apple']
    return(
        <div>
            <h1> fruit List</h1>
            <div>
                {
                    fruits.map((fruits, index)=>{
                        return (
                            <li key={index} >{fruits}</li>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default TryMap