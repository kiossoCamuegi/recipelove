import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {PiHamburger} from "react-icons/pi";
import {AiOutlineClose} from "react-icons/ai";

function Navbar() {
  const [Toggle, setToggle] = useState(false);

  return (
    <div className='recipe-navbar animate__animated  animate__heartBeat'>
       <div className="wrapper">
        <div className="items">
        <div className="d-flex">
             <Link to="/"><div className="logo">Recipe<span className='text-main'>Love</span></div></Link>
         </div>
         <ul className="d-flex menu">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/">Sobre</Link></li>
           <li><Link to="/">Recipes</Link></li>
           <li><Link to="/">Contacts</Link></li>
         </ul>
         <div className='d-flex'>
             <button className="btn bg-black text-light">Signin</button>
            <button className="btn bg-white ml-2 text-dark">Signup</button>
            <div className="toggle btn bg-white" onClick={()=>setToggle(Toggle === false ? true : false)}> <PiHamburger/> </div>
         </div>
        </div>
        <div className={`responsive-navbar animate__animated animate__backInLeft  ${Toggle === true ? "show" : "d-none"}`}   >
           <div className="toggle btn" onClick={()=>setToggle(Toggle === false ? true : false)}> <AiOutlineClose/> </div>
           <ul className="d-flex">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/">Sobre</Link></li>
           <li><Link to="/">Recipes</Link></li>
           <li><Link to="/">Contacts</Link></li>
           <br />
           <button className="btn bg-black text-light">Signin</button>
            <button className="btn bg-white ml-2 text-dark">Signup</button>
         </ul>
        </div>
       </div>
    </div>
  )
}

export default Navbar