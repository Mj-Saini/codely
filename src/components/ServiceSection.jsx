// ServiceSection.jsx

import React from 'react';
import serviceImg from '../assets/image/png/service_list_img1.png'; // adjust path

const ServiceSection = ({ heading, subheading, mapData,cardStyling,listStyling,listing, reverseRow=false }) => {
    return (
        <section className="py-16 bg-white z-10 relative">
            <div className="container mx-auto px-4">
                <div className={`flex  items-center gap-10 ${reverseRow ? " flex-col md:flex-row-reverse" : "flex-col md:flex-row"}`}>

                    {/* Left Content */}
                    <div className="w-full md:w-1/2" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                        <div>
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
                                    {heading}
                                </h2>
                                <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                    {subheading}
                                </p>
                            </div>

                            <ul className={`space-y-6 ${cardStyling}`}>
                             {Array.isArray(mapData) && mapData.map((item, i) => {
                                    return (
                                        <li key={i} data-aos="fade-up" data-aos-duration="2000" className='flex gap-3 lg:pe-10'>
                                            <span><span className="flex items-center justify-center w-5 h-5 rounded-full secondary_bg mt-1 text-white">
                                                &#10003;
                                            </span> </span>   <div>
                                                <h3 className="text-base lg:text-xl font-semibold secondary_text">{item.heading}</h3>
                                                <p className="text-sm md:text-[17px] text-[#3e3f66] mt-3 lg:pe-20">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })}


                            </ul>
                            <ul className={`${listStyling}`}>
                                    {Array.isArray(listing) && listing.map((obj, i) => {
                                        return (
                                            <li key={i} className='flex items-center gap-2.5 mb-2.5 text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto'>     <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full secondary_bg mt-1 text-white">
                                                &#10003;
                                            </span> {obj}</li>
                                        )
                                    })}

                                </ul>

                            <a
                                href="/service-detail"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                className="inline-flex items-center mt-8 px-6 py-3 bg-purple-800 hover:bg-purple-900 text-white rounded-md font-medium transition duration-300"
                            >
                                READ MORE
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2" data-aos="fade-in" data-aos-duration="1000">
                        <img src={serviceImg} alt="service" className="w-full max-w-md mx-auto" />
                    </div>

                </div>
            </div>
        </section>
    );
};


export default ServiceSection
