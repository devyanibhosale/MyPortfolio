import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import myphoto from "../assets/myphoto.png"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I ?</h1>
                <p className="InfoPara">
                    This is ME
                    <br />
                    Full-Stack DEVELOPER
                    <br />
                    I am a highly motivated and skilled web developer with experience in developing E-Details presentations using iPads. I hold a Bachelor of Computer Science degree with an 8.59 CGPA and I am dedicated to delivering high-quality products within deadlines. I have proficiency in web development languages such as HTML, CSS, and JavaScript and experience working with web development frameworks like React. I also possess strong communication and collaboration skills.
                    <br />
                    Currently, I work as a Web Developer at Accenture Pvt Solution, where I develop E-Details presentations used by medical sales reps to showcase information about drugs to doctors using the iPad. In addition to my work experience, I have built responsive websites for practice using Bootstrap and HTML.
                    <br />
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
            <img src={myphoto} alt="My" />
            </div>
        </div>
    )
}

export default AboutContent;
