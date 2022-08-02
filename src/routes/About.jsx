import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Aboutcon from '../components/Aboutcon'
const About = () => {
  return (
    <>
  <Navbar/>
  <Hero2 heading='ABOUT' text='I am a friendly Front End Developer'/>
  <Aboutcon/>
   <Footer/>
    </>
  )
}

export default About