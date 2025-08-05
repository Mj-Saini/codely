// components/InterfaceSlider.jsx
import React from "react";
import Slider from "react-slick";
import { interfaceData } from "./common/Helper";


const InterfaceSlider = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, 
  centerMode: true,
  centerPadding: "25%", 
    autoplay: true,
  cssEase: 'ease-in-out',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "10%", 
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
};


    return (
        <section className="py-20 bg-white overflow-clip" id="interface" >
            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">Interface overview</h2>
                <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting indus orem Ipsum has been the standard dummy text ever since.
                </p>
            </div>

            <div data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
                <Slider {...settings}>
                    {interfaceData.map((item, index) => (
                        <div key={index} className="px-4 pb-10">
                            <div className="bg-white rounded-lg overflow-hidden text-center active-slide">
                                <img src={item.image} alt={item.caption} className="w-full object-contain " />
                                <h3 className="text-base lg:text-xl font-semibold mt-2 text-[#3e3f66]/80">{item.caption}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default InterfaceSlider
