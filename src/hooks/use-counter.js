import React from "react";


const useCounter = (action) => {
const [counter,setCounter] = React.useState(0);

const executing_action = action == 'INCREMENT' ? 1 : -1;

React.useEffect( () => {
    const interval = setInterval(()=>{
        setCounter((prevCounter) => {
          return  prevCounter + executing_action;
        })
    },1000)

    return () => clearInterval(interval);
},[]);
debugger;
return counter;
}

export default useCounter;