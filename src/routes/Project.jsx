import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Workcard from '../components/Workcard'

const Project = () => {
  return (
   <>
   <Navbar/>
   <Hero2 heading='PROJECTS' text='Some of my recent work'/>
   <Workcard/>
   <Footer/>
   </>
  )
}

export default Project