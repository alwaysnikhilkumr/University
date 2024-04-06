import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/Page1/LandingPage'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {

  const [playState, setPlayState] = React.useState(false)

  return (
    <div>
      <Navbar />
      <LandingPage />
      <div className='container'>
        <Title title='OUR PROGRAM' subTitle='What We Offer'/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title title='GALLERY' subTitle='Campus Photos'/>
        <Gallery />
        <Title title='TESTIMONIALS' subTitle='What Student Says'/>
        <Testimonials />
        <Title title='contact us' subTitle='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
