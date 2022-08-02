import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Form from '../components/Form'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero2 heading='CONTACT.' text='Lets have a chat'/>
    <Form/>
   <Footer/>
    </>
  )
}

export default Contact