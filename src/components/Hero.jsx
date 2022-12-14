import './Hero.css'
import React from 'react'
import Into from'../Assets/intro-bg.jpg'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className='hero'>
        <div className='mask'>
            <img src={Into}className='into-img' alt="Into Image" />
        </div>
        <div className='content'>
         <p>Hi! I am Utsav Sharma</p>
          <h1>React Developer</h1>
        <div>
          <Link to='/project' className='btn'>Project</Link>
          <Link to='/contact' className='btn btn-light'>Contact</Link>
    </div>
    </div>
    </div>
    </>
  )
}

export default Hero