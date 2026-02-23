import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Option from '../Compoents/Option'
import Counter_with_limit from '../Compoents/Counter_with_limit';
import Projectpage from '../Compoents/Projectpage';
import InputMirror from '../Compoents/InputMirror';
import ToggletPasswordVisibility from '../Compoents/ToggletPasswordVisibility'
import CharCounter from '../Compoents/CharCounter';
import QueAns from '../Compoents/QuestionAns'
const router = () => {
  return (
    <div>
        <BrowserRouter>
            
        <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        </nav>


            <Routes>
                <Route path="/" element={<Projectpage />} />                
                <Route path="/option" element={<Option />} />
                <Route path="/counter" element={<Counter_with_limit />} />
                <Route path="/mirror" element={<InputMirror />} />
                <Route path='/showHidePassword' element={<ToggletPasswordVisibility/>} />
                <Route path='/charCounter' element={<CharCounter/>} />
                 <Route path='/queAns' element={<QueAns/>} />
            </Routes>
      </BrowserRouter>

    </div>
  )
}

export default router
