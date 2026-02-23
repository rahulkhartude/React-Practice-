import React from 'react'
import Option from './Option';
import Counter_with_limit from './Counter_with_limit'
import { Link } from "react-router-dom";

const Projectpage = () => {

  return (
    <div>
       <div><Link to={"/option"}>Option (checkBox)</Link></div>
       <div><Link to={"/counter"}>Counter With Limit</Link></div>
       <div><Link to={"/mirror"}>Input Mirror</Link></div>
        <div><Link to={"/showHidePassword"}>Show/Hide Password</Link></div>
        <div><Link to={"/charCounter"}>Character Counter</Link></div>
        <div><Link to={"/queAns"}>Question and Answer</Link></div>
    </div>
  )
}

export default Projectpage
