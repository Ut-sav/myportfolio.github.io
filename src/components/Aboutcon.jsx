import React from 'react'
import {Link} from 'react-router-dom'
import './aboutcon.css'
import Aboui from '../Assets/react.jpeg'
import Abou from '../Assets/react2.png'
const Aboutcon = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who am I</h1>
            <p>I am a beginner in React.I have the knowledge of javascript HTML5 and Css3 </p>
            <Link to='/contact'>
               <button className='btn'>Contact</button> 
                </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top" >
                    <img src={Aboui} alt="random" className='img' />
                </div>
                <div className="img-stack bottom" >
                    <img src={Abou} alt="random" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcon