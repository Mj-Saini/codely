import { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, useLocation } from 'react-router-dom';

import PreLoader from './components/common/PreLoader';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import ContactUs from './pages/ContactUs';
import AboutPage from './pages/AboutPage';
import TestimonialPage from './pages/TestimonialPage';
import BlogList from './pages/BlogList';
import ServiceList1 from './pages/ServiceList1';
import ServiceList2 from './pages/ServiceList2';
import PricingPage from './pages/PricingPage';
import BlogDetails from './pages/BlogDetails';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import PageNotFound from './components/PageNotFound';
import FaqsPage from './pages/FaqsPage';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    AOS.init();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <Routes>
      <Route path='/' element={<Layout><LandingPage /></Layout>} />
      <Route path='/contact-us' element={<Layout><ContactUs /></Layout>} />
      <Route path='/about-us' element={<Layout><AboutPage /></Layout>} />
      <Route path='/testimonials' element={<Layout><TestimonialPage /></Layout>} />
      <Route path='/blog-list' element={<Layout><BlogList /></Layout>} />
      <Route path='/services-1' element={<Layout><ServiceList1 /></Layout>} />
      <Route path='/services-2' element={<Layout><ServiceList2 /></Layout>} />
      <Route path='/pricing' element={<Layout><PricingPage /></Layout>} />
      <Route path='/blog-details' element={<Layout><BlogDetails /></Layout>} />
      <Route path='/sign-in' element={<Layout><LoginPage /></Layout>} />
      <Route path='/sign-up' element={<Layout><SignUp /></Layout>} />
      <Route path='/faq' element={<Layout><FaqsPage /></Layout>} />
     <Route path='/page-not-found' element={<Layout><PageNotFound /></Layout>} />
    </Routes>
  );
}

export default App;
