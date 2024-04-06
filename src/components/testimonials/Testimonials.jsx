import React, { useRef } from 'react'
import './Testimonials.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user1 from '../../assets/user1.jpeg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'

const Testimonials = () => {

    const slider = useRef();
    let translatex = 0;

    const slideBackward = () => {
        if (translatex < 0){
            translatex += 25;
        }
        slider.current.style.transform = `translateX(${translatex}%)`
    }

    const slideForward = () => {
        if (translatex > -50){
            translatex -= 25;
        }
        slider.current.style.transform = `translateX(${translatex}%)`;
    }

  return (
    <div className='testimonials'>
      <img className='next-btn' src={next_btn} alt='' onClick={slideForward}/>
      <img className='back-btn' src={back_btn} alt='' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user1} />
                        <div>
                            <h3>Manya</h3>
                            <span>Lebnan</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user2} />
                        <div>
                            <h3>Emilly</h3>
                            <span>USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user3} />
                        <div>
                            <h3>Jhon</h3>
                            <span>USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user4} />
                        <div>
                            <h3>Arvind</h3>
                            <span>Lebnan</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>  
    </div>
  )
}

export default Testimonials
