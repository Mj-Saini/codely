
import React from 'react'
import { solutionsList } from './common/Helper'



const Solutions = () => {

  return (
    <section className="py-20 max-sm:pb-5 bg-white solution_section">
      <div className="container custom_container mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
            Solution made for
          </h2>
          <p className="text-sm md:text-[17px] text-[#3e3f66]">
            Lorem Ipsum is simply dummy text of the printing and typese tting indus <br />
            orem Ipsum has been the standard dummy text ever since.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutionsList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl group solution_cards transition_05 duration-300 p-4 md:p-6 flex gap-3"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
              <div className="flex flex-col mb-4">
              
              <h3 className="text-lg lg:text-xl font-semibold secondary_text mb-2 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-sm md:text-[17px] text-[#3e3f66]">{item.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
