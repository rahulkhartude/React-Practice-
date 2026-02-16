import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Option from '../Compoents/Option'
import Counter_with_limit from '../Compoents/Counter_with_limit';
import Projectpage from '../Compoents/Projectpage';
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
                {/* <Route path="/counter" element={<Counter_with_limit />} /> */}
            </Routes>
      </BrowserRouter>

    </div>
  )
}

export default router
