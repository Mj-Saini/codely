
import { useEffect } from 'react';
import './App.css'
// import 'aos/dist/aos.css';
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/common/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactUs from './pages/ContactUs';
import NeedSupport from './components/NeedSupport';
import AboutPage from './pages/AboutPage';
import TestimonialPage from './pages/TestimonialPage';
import BlogList from './pages/BlogList';
import ServiceList1 from './pages/ServiceList1';
import ServiceList2 from './pages/ServiceList2';
import PricingPage from './pages/PricingPage';

function App() {
  useEffect(() => {
  AOS.init();
}, []);

  return (
    <>
      <Routes>
        <Route path='/' element={ <LandingPage/>} />
        <Route path='/contact-us' element={ <ContactUs/>} />
        <Route path='/about-us' element={ <AboutPage/>} />
        <Route path='/testimonials' element={ <TestimonialPage/>} />
        <Route path='/blog-list' element={ <BlogList/>} />
        <Route path='/services-1' element={ <ServiceList1/>} />
        <Route path='/services-2' element={ <ServiceList2/>} />
        <Route path='/pricing' element={ <PricingPage/>} />
      </Routes>
            <NeedSupport/>
      <Footer />
      
    </>
  )
}

export default App
