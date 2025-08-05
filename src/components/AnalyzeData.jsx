import React from 'react'



const AnalyzeData = ({heading,icon,mapData,bgImg}) => {
  return (
    <section className="pt-0 pb-20 md:py-20 bg-[#f6f4ff] analyze_section">
      <div className="custom_container container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between item s-center gap-12">
          {/* Left Text Content */}
          <div
            className="w-full lg:w-1/2 lg:pe-20"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <span className="inline-block mb-4">
              <img
                src={icon}
                alt="Analyze Icon"
                className="w-15 h-15"
              />
            </span>
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
               {heading}
              </h2>
              <p className="text-sm md:text-[17px] text-[#3e3f66]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since when
                an unknown printer took a galley of type and.
              </p>
            </div>

            <ul className="space-y-6">
              {[
                {
                  title: 'Carefully designed',
                  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
                {
                  title: 'Seamless Sync',
                  desc: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem dollar summit.',
                },
              ].map((item, i) => (
                <li
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="flex gap-2"
                >
                  <div>
                    <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full secondary_bg mt-1 text-white">
                      &#10003;
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base lg:text-xl font-semibold secondary_text">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[17px] text-[#3e3f66]">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Content */}
          <div
             style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${bgImg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className={`w-full lg:w-5/12 lg:pe-20 mt-10 lg:mt-0`}
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <div className="h-full w-full flex justify-center lg:justify-between items-center relative gap-6">
              {mapData.map((img) => (
                
                 <img  key={img.id} data-aos="fade-in"
                  data-aos-duration="2000"
                  data-aos-delay="100"
                  className={` text-black inline ${img.cardStyling}`} src={img.img} alt="img" />
               
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnalyzeData
