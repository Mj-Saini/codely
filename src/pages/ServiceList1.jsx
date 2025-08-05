import React from 'react'
import CommonHero from '../components/common/CommonHero'
import { servicesList, WhyChooseLiList } from '../components/common/Helper'
import CommonBtn from '../components/common/CommonBtn'
import ItSolution from '../components/ItSolution'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

const ServiceList1 = () => {
    return (
        <div>
            <CommonHero heading='service list 1' pageName="our services" />
            <section className="py-20 bg-white relative z-10">
                <div className="container mx-auto px-4">
                    {/* Section Title */}
                    <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Services</h2>
                        <p className="text-gray-500">
                            Lorem Ipsum is simply dummy text of the printing and typese tting indus <br />
                            orem Ipsum has beenthe standard dummy text ever since
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
                        {servicesList.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 transition-all duration-300 group"
                            >

                                 <div className="relative w-24 h-24 ">
                                {/* Icon Image */}
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="relative z-10 w-24 h-24"
                                />

                                {/* Hover circle with rotating dots */}
                                <div className="absolute -translate-y-2.5 inset-0 z-0 flex items-center justify-center pointer-events-none">
                                   <div className="dot-wrapper ">
                                        <span className="dot-circle" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', background:"#3B82F6" }}></span>
                                        <span className="dot-circle" style={{ top: '50%', right: 0, transform: 'translateY(-50%)', background:"#3B82F6" }}></span>
                                        <span className="dot-circle" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', background:"#3B82F6" }}></span>
                                    </div>
                                </div>
                            </div>
                                
                                <div className="text-center">
                                    <h3 className="text-base lg:text-xl font-semibold secondary_text">{service.title}</h3>
                                    <p className="text-sm md:text-[17px] text-[#3e3f66] py-3 lg:py-5">{service.desc}</p>
                                    <div className='flex justify-center lg:mt-3'>
                                        <CommonBtn btnName='Discover more' btnStyling='!bg-transparent primary_text !shadow' path='/services-details' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <ItSolution reverseRow={true} heading="Why you should choose Codely ?" subHeading="Lorem Ipsum is simply dummy text of the printing and types
                  etting industry lorem Ipsum has been the indu has been the industrys standard dummy text ever since
                  the when an unknown printer took a galley of type and." listing={WhyChooseLiList} cardStyling="hidden" />

            <Testimonials slidesToShow={1} dotStyling="hometestimonials" rightSecStyling="w-full md:w-7/12" profileImg="hidden"/>
                  <Pricing/>
        </div>
    )
}

export default ServiceList1
