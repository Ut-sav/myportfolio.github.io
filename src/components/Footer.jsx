import React from "react";
import './Footer.css'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin} from 'react-icons/fa'


const Footer = () => {
  return (
  
   <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
               <FaHome size={20} style={{color:'white', marginRight:'2rem'}}/> 
               <div>
                <p>KO-1, 1602 Klassic Heights, Jaypee Greens Wishtown</p>
                <p>Noida, Uttar Pradesh, 201304</p>
               </div>
            </div>
        <div className="phone">
        <h4><FaPhone size={20} style={{color:'white', marginRight:'2rem'}}/>
        +919667581507
         </h4>
        </div>
        <div className="mail">
        <h4><FaMailBulk size={20} style={{color:'white', marginRight:'2rem'}}/>
           utsavsharma542@gmail.com
        </h4>
        </div>
        </div>
        <div className="right">
                <h4>Connect</h4>
                <p>You can use any social media platform to connect and give your opinions.</p>
             <div className="social">
            <FaFacebook size={30} style={{color:'white', marginRight:'1rem'}}/>
            <FaLinkedin size={30} style={{color:'white', marginRight:'1rem'}}/>

            </div>
        </div>
    </div>
   </div>
  
  )
}

export default Footer