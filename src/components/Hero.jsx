

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Mail } from 'lucide-react';
import CommonBtn from './common/CommonBtn';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative pt-20 lg:pt-32 text-white overflow-hidden z-10">
      <div className="container custom_container mx-auto px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-[55px] font-bold mb-4 leading-tight"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Grow your software <span className='block'> faster & easier with Dashbord</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-[17px] mb-5 max-w-2xl"
          style={{ color: 'var(--color-muted)' }}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          The World's simplest and fast platform that brings everything together
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <div  style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid rgba(0,0,0,0.1)',
              }} className="relative w-full sm:w-[550px] flex rounded-full p-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-10 pr-4 py-2 w-full rounded-full text-black outline-none"
             
              required
            />
          
            
          
              <CommonBtn btnName='try free trial' btnStyling='' path='/contact-us'/>
           
          </div>

         
        </form>

        {/* Sign In */}
        <span
          className="mt-3 text-sm"
          // style={{ color: 'var(--color-muted)' }}
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          Already using software?{' '}
          <a href="#" className="underline" style={{ color: 'var(--color-white)' }}>
            Sign in
          </a>
        </span>

        {/* Overflowing Image Box */}
        <div
          className="mt-16 w-[890px] max-w-full aspect-[890/550] bg-gray-300 flex items-center justify-center text-gray-600 text-sm z-10 relative rounded-2xl md:rounded-[0px]"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          Place your image here <br /> 890 x 550
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
