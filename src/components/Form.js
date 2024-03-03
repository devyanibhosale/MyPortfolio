import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form
        action="https://formspree.io/f/xkndwnwg"
        method="POST">
            <label>Your Name</label>
            <input type="text" name="username" autoCapitalize="off" required></input>
            <label>Email</label>
            <input type="email"  name="email" autoCapitalize="off" required></input>
            <label>Subject</label>
            <input type="text"  name="subject" autoCapitalize="off" required></input>
            <label>Message</label>
            <textarea rows="6"
             placeholder="Type your message here"
             name="Message"
             autoCapitalize="off" required></textarea>
            <button className="btn">Submit</button>
            <h2>  THANK YOU!</h2>
        </form>
      
    </div>
  )
}

export default Form