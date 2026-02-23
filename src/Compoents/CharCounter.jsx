import React, { useState } from 'react'

const CharCounter = () => {
    const [maxLimit ,setMaxLimit] = useState(10);
    const [text,setText] = useState("");
    const [isMax,setIsMAx] = useState(false);
    const checkMax =(value)=>{
        if(value.length ==maxLimit){
           setIsMAx(true)
        }
        setText(value);
    }

  return (
    <div>

        <textarea value={text}  onChange={(e)=>checkMax(e.target.value)}
        maxLength={maxLimit}

        > </textarea>
        <p style={{"color":text.length==maxLimit?"red":"black"}}>Char Limit: {maxLimit - text.length} out of {maxLimit}</p>       
    </div>
  )
}

export default CharCounter
