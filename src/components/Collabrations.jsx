import React from 'react';
// Images
import collaborateIcon1 from '../assets/image/png/Collaborate-icon_2.png';
import collaborateImg1 from '../assets/image/png/Collaborate-01.png';
import collaborateImg2 from '../assets/image/png/Collaborate-02.png';
import collaborateIcon2 from '../assets/image/png/Collaborate-icon_2.png';
import securelyIcon from '../assets/image/svg/securely.svg';
import SyncIcon from '../assets/image/svg/Syncfollowers.svg';
import GlobeIcon from '../assets/image/svg/Globallyconnected.svg';



const Collabrations = () => {

    return (
        <section className="py-20 bg-white">
            <div className="container custom_container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Image Section */}
                    <div className="w-full lg:w-1/2" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                        <div className="flex flex-col gap-6 relative px-20">
                            <div className="flex flex-col items-end justify-end lg:flex-row gap-4">
                                <img className="h-[90px] animate-[bounce_3s_ease-in-out_infinite] rounded-2xl absolute left-0 top-5 sm:top-1/3 z-10" src={collaborateIcon1} alt="icon" />
                                <img className="w-[271px] rounded-md " src={collaborateImg1} alt="collaborate 1" />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4">
                                <img className="w-[271px] rounded-md " src={collaborateImg2} alt="collaborate 2" />
                                <img className="h-[90px] animate-[bounce_3s_ease-in-out_infinite] rounded-2xl z-10 absolute right-10 bottom-5 sm:bottom-1/3" src={collaborateIcon2} alt="icon" />
                            </div>
                        </div>
                    </div>

                    {/* Right Text Section */}
                    <div className="w-full lg:w-1/2" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100">
                        <div>
                            <span className="inline-block mb-4">
                                <img className="w-15" src={securelyIcon} alt="securely icon" />
                            </span>
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-3xl lg:text-[40px] font-bold secondary_text mb-4">Collaborate securely everything</h2>
                                <p className="text-sm lg:text-[17px] text-[#3e3f66]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry’s standard dummy text ever since the unknown printer took a galley of type.
                                </p>
                            </div>



                            <ul className="space-y-6">
                                <li data-aos="fade-up" data-aos-duration="2000" className='flex gap-2'>
                                    <div>
                                        <span className='flex items-center justify-center w-22 h-22 bg-white mt-1 text-white'>
                                            <img src={SyncIcon} alt="globe" />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-semibold secondary_text">
                                            Sync followers
                                        </h3>
                                        <p className="text-sm lg:text-[17px] text-[#3e3f66]">
                                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem dollar summit.

                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="2000" className='flex gap-2'>
                                    <div>
                                        <span className='flex items-center justify-center w-22 h-22 bg-white mt-1 text-white'>
                                            <img src={GlobeIcon} alt="globe" />
                                        </span>
                                    </div>   <div>
                                        <h3 className="text-lg lg:text-xl font-semibold secondary_text">
                                            Globally connected
                                        </h3>
                                        <p className="text-sm lg:text-[17px] text-[#3e3f66]">
                                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem dollar summit.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <a
                                href="/service-detail"
                                className="inline-block mt-8 bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition"
                                data-aos="fade-up"
                                data-aos-duration="2000"
                            >
                                READ MORE <i className="ml-2">&#8594;</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Collabrations
