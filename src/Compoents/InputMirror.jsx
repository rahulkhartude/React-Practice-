import React, { useState } from 'react'

const InputMirror = () => {
    const [text,setText] = useState("");
  return (
    <div>
        <h1>{text}</h1>
      <input type='text' value={text} placeholder='enter something' onChange={(e)=>setText(e.target.value)} />
  
    </div>
  )
}

export default InputMirror
