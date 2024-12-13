import Navbar from '../Navbar'
import Home from '../Home'
import Featured from '../Featured'
import Testimonials from '../Testimonials'
import Contact from '../Contact'
import Footer from '../Footer'
import { FaHandPointLeft } from "react-icons/fa";
import './index.css'

const HomePage = () => (
  <>
    <Navbar />
    <div className='more-info'>
      <h1 className='more'>To Know More</h1>
      <button type="button" className='click-btn'>
        <a href="https://stonepedia.in/">CLICK HERE</a>
        <span><FaHandPointLeft /></span>
      </button>
    </div>
    <Home />
    <Featured />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default HomePage;
