
import { useState } from 'react'
import './App.css'
import Fasilitis from './components/Fasilitis/Fasilitis'
import Hotels from './components/Hotels/Hotels'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Review from './components/Review/Review'

function App() {

  const [booking, setBooking] = useState([]);
  const handleBooking = (post) => {
    setBooking([...booking, post])
  }


  return (
    <>
      <div className='sticky z-50 top-0 bg-white'>
        <Navbar booking={booking}></Navbar>
      </div>
      <Slider></Slider>
      <Hotels handleBooking={handleBooking}></Hotels>
      <Fasilitis></Fasilitis>
      <About></About>
      <Review></Review>
      <Footer></Footer>
    </>
  )
}

export default App
