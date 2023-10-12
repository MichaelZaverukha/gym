import React from 'react'

export default function Contact() {
  return (
    <div id='contact'>
      <h2>CONTACT US</h2>
      <form>
         <input type='text' placeholder='Full Name'/>
         <input type='email' placeholder='Type Your Email'/>
         <textarea placeholder='Write Here...' name='message'></textarea>
         <input type='submit' value='Send'/>
      </form>
    </div>
  )
}
