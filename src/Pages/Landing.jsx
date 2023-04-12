import React from 'react'
import Navbar from '../Components/Navbar'
import "./landing.css"
import HeroText from '../Components/HeroText'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
const Landing = () => {
  return (
    <>
    <Navbar/>

    {/* Hero Section */}
    <HeroText/>

    {/* About Section */}
    <About />

    {/*Projects */}
    <Projects/>

    {/* Contact */}
    <Contact/>

    {/*Footer */}
    <Footer/>
    </>
  )
}

export default Landing