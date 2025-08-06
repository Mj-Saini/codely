import React from 'react'
import AnimLine from './common/AnimLine'
import { featureList } from './common/Helper'



const AdvancedFeatures = () => {
  return (
      <section id="getstarted" className="py-20 bg-[#f9f9ff] relative overflow-hidden">
      {/* Animated lines background */}
          <AnimLine/>
      

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold text-white mb-4">Advanced Features</h2>
          <p className="text-sm md:text-[17px] text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 items-start bg-white p-5 md:p-10 rounded-2xl"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 100}
            >
              <div className="min-w-[60px]">
                <img src={feature.icon} alt={feature.title} className="w-[60px]" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-semibold secondary_text">{feature.title}</h3>
                <p className="text-sm md:text-[17px] text-[#3e3f66]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvancedFeatures
