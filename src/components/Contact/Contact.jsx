import React from 'react'
import './contact.css'
import message from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import Phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1e043f8e-71a5-4302-9e5d-4baedfb73f69");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={message} /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} /> academic@nsut.ac.in</li>
            <li><img src={Phone} /> +91 011-25000268</li>
            <li><img src={location} />Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder='enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='enter your mobile number' required />
            <label>E-Mail</label>
            <input type="text" name="email" placeholder='enter your email' required />
            <label>Message</label>
            <textarea name="message" rows="6" placeholder='enter your message' required />
            <button type='Submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
