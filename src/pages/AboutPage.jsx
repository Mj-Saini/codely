import React from 'react'
import FreeTrial from '../components/FreeTrial'
import Testimonials from '../components/Testimonials'
import CommonHero from '../components/common/CommonHero'
import Reviews from '../components/Reviews'

import abt_01 from '../assets/image/png/abt_01.png';
import abt_02 from '../assets/image/png/abt_02.png';
import abt_03 from '../assets/image/png/abt_03.png';
import orangePlay from '../assets/image/png/orange_play.png';
import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp'
import OurTeam from '../components/OurTeam'
import ItSolution from '../components/ItSolution'
import { ItSolutionList } from '../components/common/Helper'

const AboutPage = () => {
    return (
        <>
            <CommonHero heading='about us' pageName="About us" />
            <div className='relative z-10 bg-white'>
                <Reviews />
            </div>
            <section className="relative py-20 bg-white md:-mt-66">
                {/* Dots animation block */}
                <div className="absolute inset-0 z-0">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={`absolute w-4 h-4 rounded-full bg-gray-300 animate-ping dotes_${i + 1}`}></div>
                    ))}
                </div>

                <div className="relative z-10 container custom_container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center">
                        {/* Text block */}
                        <div className="md:w-1/2 md:pe-5">
                            <div className="space-y-6 flex flex-col items-center h-full">
                                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">Few words about us, what we provide for your growth</h2>
                                <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since.
                                </p>
                                <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
                                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since.
                                </p>
                            </div>
                        </div>

                        {/* Image block */}
                        <div className="md:w-1/2 md:ps-5 relative mt-10 md:mt-0">
                            <Link
                                to="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                            >
                                <div className="relative">
                                    <img src={orangePlay} alt="Play" className="w-16" />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <div className="absolute w-20 h-20 border-4 border-orange-500 rounded-full animate-ping"></div>
                                        <div className="absolute w-20 h-20 border-4 border-orange-500 rounded-full animate-ping delay-200"></div>
                                        <div className="absolute w-20 h-20 border-4 border-orange-500 rounded-full animate-ping delay-400"></div>
                                    </div>
                                </div>
                            </Link>

                            <div className="space-y-4 ">
                                <div className="flex  space-x-4 items-end justify-end">
                                    <img src={abt_01} alt="abt 01" className="rounded-lg sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] shadow-md" />
                                    <img src={abt_02} alt="abt 02" className="rounded-lg sm:w-[270px] sm:h-[270px] w-[150px] h-[150px] shadow-md" />
                                </div>
                                <img src={abt_03} alt="abt 03" className="rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>

                    {/* Counter section */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { count: 450, label: 'Millions of client logins monthly' },
                            { count: 120, label: 'Languages and countries' },
                            { count: 135, label: 'Percent yearly turnover increase' },
                            { count: 324, label: 'Million active accounts' }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-5 rounded-xl group hover:[background:linear-gradient(35deg,#6949F2_10%,#131658,#060a3d_100%)] duration-300">
                                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold secondary_text group-hover:!text-white"><CountUp end={item.count} /></p>
                                <p className="text-sm md:text-[17px] text-[#3e3f66] font-medium group-hover:text-white" >{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ItSolution heading="Providing IT solution that diverse business verticals" subHeading="Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the indu has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and." listing='' listStying="hidden" cardData={ItSolutionList} />


            {/* OUR TEAM */}
            <OurTeam />

            <Testimonials slidesToShow={3} hideImgCol="hidden" rightSecStyling="w-full pb-10" />
            <div className='mb-12 md:mb-16 lg:mb-24'>
                <FreeTrial />
            </div>

        </>
    )
}

export default AboutPage
