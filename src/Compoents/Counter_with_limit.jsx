import React, { useState } from 'react'

const Counter_with_limit = () => {

// Create a counter with:
// Increment button
// Decrement button
// Reset button
// Counter should not go below 0
// Show message "Maximum reached" if count = 10
const [counter,setCounter] = useState(0);
const [warning,setWarning] = useState("");

const handleButton=(type)=>{
    if(type === "increase")
    {
        if(counter ==10){
         return  setWarning("Maximum reached")
        }
        setWarning("")
        setCounter(counter+1);
    }

else if(type === 'decrease'){
   if(counter==0){
    return setWarning("Counter should not go below 0");
   }
           setWarning("")
    setCounter(counter-1);
}
else {
    setWarning("")
    setCounter(0);
}
}

  return (
    <div>
        <div>
            <div>{counter}</div>
            <p style={{color:"red"}}>{warning}</p>
            </div>
      <div style={{margin:"10px"}}>
        <button onClick={()=>handleButton("increase")}>Increase</button>
        <button onClick={()=>handleButton("decrease")}>Decrease</button>
        <button onClick={()=>handleButton("reset")}>Reset</button>
      </div>
    </div>
  )
}

export default Counter_with_limit
