import React from 'react'
import "./LandingPage.css"
import dark_arrow from  '../../assets/dark-arrow.png'

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='landingText'>
        <h1>We Ensure Better Education for Better Tomorrow</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore Now <img src={dark_arrow} /></button>
      </div>
    </div>
  )
}

export default LandingPage
