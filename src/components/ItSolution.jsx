import React from 'react'

import solutionImg from '../assets/image/png/solution.png';

const ItSolution = ({ heading, subHeading, listing, cardData,cardStyling, listStying, reverseRow = false }) => {
 console.log(cardData,"about")
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className={`flex flex-col md:flex-row items-center gap-10 ${reverseRow ? 'md:flex-row-reverse' : ''}`}>
                        {/* Image Section */}
                        <div
                            className="w-full md:w-1/2"
                            data-aos="fade-in"
                            data-aos-duration="2000"
                            data-aos-delay="100"
                        >
                            <img
                                src={solutionImg}
                                alt="solution"
                                className="w-full md:h-[670px] object-contain"
                            />
                        </div>

                        {/* Text Section */}
                        <div
                            className="w-full md:w-1/2"
                            data-aos="fade-in"
                            data-aos-duration="2000"
                            data-aos-delay="100"
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
                                    {heading}
                                </h2>
                                <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
                                    {subHeading}
                                </p>
                            </div>

                            {/* Feature List */}
                            <ul className={`space-y-6 ${cardStyling}`}>
                                {Array.isArray(cardData) && cardData.map((card, i) => {
                                    console.log(card)
                                    return (
                                        <li
                                            className="aos-init flex gap-2"
                                            data-aos="fade-up"
                                            data-aos-duration="2000"
                                            key={i}
                                        >
                                            <img src={card.img} alt="solution icon" />
                                            <div className=''>
                                                <h3 className="text-lg lg:text-xl font-semibold secondary_text">
                                                   {card.heading}
                                                </h3>
                                                <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto !leading-8 lg:pe-10">
                                                 {card.subHeading}
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                                <ul className={`${listStying}`}>
                                    {Array.isArray(listing) && listing.map((obj, i) => {
                                        return (
                                            <li key={i} className='flex items-center gap-2.5 mb-2.5 text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto'>     <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full secondary_bg mt-1 text-white">
                                                &#10003;
                                            </span> {obj}</li>
                                        )
                                    })}

                                </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ItSolution
