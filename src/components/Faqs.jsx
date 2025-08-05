import React, { useState } from 'react';
import { faqData } from './common/Helper';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faqBlock" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
            FAQ - Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry standard dummy.
          </p>
        </div>

        <div className="custom_container space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="rounded-lg shadow overflow-hidden transition-all duration-300" data-aos="fade-up" data-aos-duration="1500">
                <button
                  className={`w-full flex items-center justify-between p-4 text-base lg:text-xl font-semibold transition ${
                    isOpen ? 'primary_text' : 'text-black'
                  }`}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`transition-transform transform text-2xl text-[#839bc0] ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 py-4 px-4' : 'max-h-0 opacity-0 py-0 px-4'
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-[16px] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
