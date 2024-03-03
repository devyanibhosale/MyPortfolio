import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutConent from '../components/AboutConent'

const About = () => {
  return (
    <div>
         <Navbar />
         <HeroImg2  heading="About  Me" text=" I am a Full-Stack Developer"/>
         <AboutConent/>
        <Footer />
    </div>
  )
}

export default About