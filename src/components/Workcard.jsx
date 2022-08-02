import React from 'react'
import'./Work.css'
import {NavLink} from 'react-router-dom'
import Screen from'../Assets/Screenshot.png'

const Workcard = () => {
  return (
  <>
  <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
    <div className="project-card">
        <img src={Screen} alt="Random" />
        <h2 className="project-title">A Movie Website</h2>
        <div className='pro-details'>
            <p>I have created a movie website with the help of react hooks and context API. We can get the movie just by typing it in the search bar.</p>
            <div className='pro-btn'>
         <NavLink to='url.com' className='btn'>View</NavLink>
         <NavLink to='url.com' className='btn'>Source</NavLink>
            </div>
        </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Workcard