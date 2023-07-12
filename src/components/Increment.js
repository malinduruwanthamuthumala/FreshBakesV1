import React from "react";
import useCounter from "../hooks/use-counter";
const Increment = () => {
    
    const count = useCounter('INCREMNT');
    return (
        <p>counter : {count}</p>
    )
    
}

export default Increment;