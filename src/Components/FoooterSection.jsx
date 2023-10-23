import React from 'react'
import { Link } from 'react-router-dom'
import {BsInstagram, BsFacebook,BsTwitter, BsLinkedin} from "react-icons/bs";

function FoooterSection() {
  return (
    <div className='footer-section'>
        <div className="wrapper">
            <div className="items  footer-menu">
            <div className="footer-item">
             <div className="d-flex">
                <Link to="/"><div className="logo">Recipe<span className='text-main'>Love</span></div></Link>
              </div>
            </div>
            <ul className="footer-item">
                <li><Link to="#">Food</Link> </li>
                <li><Link to="#">Service</Link> </li>
                <li><Link to="#">About</Link> </li>
                <li><Link to="#">Blogs</Link> </li>
            </ul>
            <div className="footer-item">
               <li><Link to="#"><BsFacebook/> </Link> </li>
               <li><Link to="#"><BsTwitter/> </Link> </li>
               <li><Link to="#"><BsLinkedin/> </Link> </li>
               <li><Link to="#"><BsInstagram/> </Link> </li>
            </div>
            </div>
        </div> 
        <div className="copyright">
           <div className="wrapper">
            <div className="items">
            <div className="d-flex">copyrights 2023 # All rights reserved</div>
            <div className="d-flex">
                <li><Link to="#">Terms and conditions</Link> </li>
                <li><Link to="#">Privacy policy</Link> </li>
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default FoooterSection