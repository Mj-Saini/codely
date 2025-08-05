import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsList } from './common/Helper';
import testiImg from '../assets/image/png/testi_01.png'


const Testimonials = ({ hideImgCol, rightSecStyling,profileImg,slidesToShow ,dotStyling}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            },
        },
    ]
    };

    return (
        <section id={dotStyling} className="py-20 bg-white relative z-10">
            <div className="container custom_container mx-auto px-4">
                <div className="text-center mb-10" data-aos="fade-in" data-aos-duration="1000">
                    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
                        What our customer says
                    </h2>
                    <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy text ever since.
                    </p>
                </div>

                <Slider {...settings}>
                    {testimonialsList.map((item, i) => (
                        <div key={i}>
                            <div className="flex flex-wrap items-center px-4">
                                <div className={`w-full md:w-5/12 ${hideImgCol}`}>
                                    <img
                                        src={item.img}
                                        alt="Customer"
                                        className="w-full rounded-full mb-6 md:pe-10"
                                    />
                                </div>
                                <div className={` ${rightSecStyling}`}>
                                    <div className="flex text-[#fc9400] text-xl mb-4">
                                        {Array(5).fill(0).map((_, idx) => (
                                            <span key={idx}>★</span>
                                        ))}
                                    </div>
                                    <p className="text-sm md:text-[17px] text-[#3e3f66]">{item.review}</p>
                                    <div className='flex items-center gap-2 mt-8'>
                                        <img className={`${profileImg}`} src={testiImg} alt="profile" />
                                        <div>
                                            <h3 className="text-base lg:text-xl font-semibold secondary_text">{item.name}</h3>
                                            <span className="text-sm md:text-[15px] text-[#3e3f66]">{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div
                    className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                >
                    <div className="flex justify-center text-[#fc9400] text-xl mb-2">
                        {Array(5).fill(0).map((_, idx) => (
                            <span key={idx}>★</span>
                        ))}
                    </div>
                    <p className="text-gray-700">
                        <span className="font-semibold"> 5.0 / 5.0 -</span>
                        <a href="testimonial.html" className="text-blue-600 hover:underline ml-1">
                            3689 Total User Reviews <i className="icofont-arrow-right"></i>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials
