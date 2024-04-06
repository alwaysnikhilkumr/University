import React from 'react'
import './Gallery.css'
import nsut1 from '../../assets/nsut1.jpg'
import nsut2 from '../../assets/nsut2.jpg'
import nsut3 from '../../assets/nsut3.jpg'
import nsut4 from '../../assets/nsut4.jpg'

const Gallery = () => {
  return (
    <div className='gallery'>
      <img src={nsut1} alt='' />
      <img src={nsut2} alt='' />
      <img src={nsut3} alt='' />
      <img src={nsut4} alt='' />
    </div>
  )
}

export default Gallery
