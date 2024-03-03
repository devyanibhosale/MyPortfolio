import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/Intro.png"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="intro-img" />
        </div>
        <div className="content">
          <h1> DEVYANI BHOSALE</h1>
          <h2>  Full-Stack developer</h2>
          <p>I am a professional Full-Stack Developer creating modern and responsive designs for Web and Mobile. Let us work together. Thank you. </p>
         
          <div>
            <Link to="/project" className="btn">Project</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default HeroImg