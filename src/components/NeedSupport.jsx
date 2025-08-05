import React from "react";
import { Link } from "react-router-dom";

const NeedSupport = () => {
  return (
    <section
      className="bg-white pb-5 relative"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-delay="100"
      >
           <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18
              58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
     <use xlinkHref="#gentle-wave" x="48" y="7" fill="#9333EA" />
                  </g>
        </svg>
      </div>
      <div className="container custom_container primary_bg mx-auto px-4  shadow-md rounded-xl relative z-50">
        <div className="flex flex-col md:flex-row items-center justify-between  px-6 py-8 ">
          {/* Left: Text Content */}
          <div className="mb-6 md:mb-0">
            <div className="mb-2">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold text-white mb-4 text-center md:text-start">
                Need support? Contact our team
              </h2>
            </div>
            <p className="text-white text-sm md:text-[17px] text-center md:text-start flex items-center gap-2">
              <i className="icofont-clock-time text-primary"></i>
              Mon - Fri: 9 am to 5 am
            </p>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-col items-center gap-4">
            <Link
              to="tel:1234567890"
              className="secondary_bg hover:brightness-110 transition-all text-white font-semibold px-6 py-2 rounded-full flex whitespace-nowrap items-center gap-2 shadow-md text-xs sm:text-[15px] capitalize"
            >
              <i className="icofont-phone-circle text-lg"></i> +1 123 456 7890
                      </Link>
                      
            <Link
              to="/faq"
              className="text-white font-medium underline hover:no-underline transition text-base lg:text-[17px]"
            >
              Read The FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedSupport
