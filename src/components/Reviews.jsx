import React from 'react';
import { Star } from 'lucide-react'; 
import { reviewList } from './common/Helper';



const Reviews = () => {
  return (
    <section className="py-20 md:-translate-y-1/2 xl:-translate-y-3/5" data-aos="fade-up" data-aos-duration="2000">
      <div className="container custom_container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {reviewList.map((review, index) => (
            <div
              key={index}
              className="review_box rounded-xl p-3 lg:p-6 text-center shadow hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <img src={review.logo} alt="platform" className="h-auto" />
              </div>
              <div className="flex justify-center text-[#fc9400] text-xl mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>
              <h3 className="text-base lg:text-xl font-semibold text-center md:text-start">
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold text-black">{review.rating}</span> out of 5 Based on{' '}
                <span className="font-semibold text-black">{review.total}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Reviews
