import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <h4>
                            <p>Vijay Nagar , Sangli</p>
                            <p>Maharashtra</p>
                        </h4>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            +91 9307427434
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            <a href="mailto:bhosaledevyani3@gmail.com">bhosaledevyani3@gmail.com</a>
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>This is my portfolio website</p>
                    <div className="social">
                        <a href="https://www.facebook.com"><FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} /></a>
                        <a href="https://twitter.com"><FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} /></a>
                        <a href="https://www.linkedin.com/in/devyani-bhosale-a5a64a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
