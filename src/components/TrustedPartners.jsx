import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { companyLogos } from "./common/Helper";


const TrustedPartners = () => {
  const settings = {
      infinite: true,
      dots:true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-20 bg-white trusted_section">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
            Trusted by <span className="tertiary_text">150+</span> companies
          </h2>
          <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting <br />
            industry. Lorem Ipsum has been the standard dummy text ever since.
          </p>
        </div>

        <div
          className="company_logos"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <Slider {...settings}>
            {companyLogos.map((logo, i) => (
              <div key={i} className="px-4">
                <div className="flex justify-center items-center pb-8">
                  <img
                    src={logo}
                    alt={`Company logo ${i}`}
                    className="max-h-16 object-contain grayscale hover:grayscale-0 transition"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};


export default TrustedPartners
