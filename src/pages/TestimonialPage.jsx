import React from 'react'
import CommonHero from '../components/common/CommonHero'
import Reviews from '../components/Reviews'
import { testimonialReviewList } from '../components/common/Helper'


const TestimonialPage = () => {

    const Star = () => (
  <span className="text-[#fc9400] text-lg">★</span>
);
    return (
        <>
            <CommonHero heading='What Our Client Says' pageName="testimonials" />
            <div className='relative z-10 bg-white'>
                <Reviews />
            </div>

            <section className=" pb-32 py-16 bg-gray-50 md:-mt-66 z-10 relative">
                <div className="container mx-auto px-4">
                    <div
                        className="text-center mb-12 max-w-3xl mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
                            We work with customers worldwide.
                        </h2>
                        <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
                        {testimonialReviewList.map((review, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg p-6 space-y-6"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto pb-10 border-b border-[#3e3f66]">
                                    <strong>{review.text.split('”')[0]}”</strong>
                                    {review.text.split('”')[1]}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{review.name}</h3>
                                            <span className="text-sm text-gray-500">{review.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}


export default TestimonialPage
