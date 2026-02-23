import React, { useState } from 'react'

const ToggletPasswordVisibility = () => {
    const [show, setShow] =  useState(false);
    
  return (
    <div>
      <input type={show ? 'text':'password'} ></input>
      <button onClick={()=>setShow(!show)}> {show ? "Hide" : "Show"} </button>
    </div>
  )
}

export default ToggletPasswordVisibility
