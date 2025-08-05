'use client';

import { powerfulSolutionList } from './common/Helper';
import CountUp from './CountUp';
import businessImg from '../assets/image/png/business_vectore.png'

const PowerFullSolution = () => {
    return (
        <section className="relative py-20 bg-[#f9f9f9] overflow-hidden">
            {/* Dots background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`absolute w-3 h-3 rounded-full bg-gray-300 opacity-30 animate-pulse dot dot-${i + 1}`} />
                ))}
            </div>

            {/* Background pattern image */}
            <div className="absolute bottom-0 right-0 z-0 opacity-10">
                <img src={businessImg} alt="background" className="max-w-[500px]" />
            </div>

            <div className="relative z-10 container custom_container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">Powerful solution for your business</h2>
                    <p className="text-sm md:text-[17px] text-[#3e3f66]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Features list */}
                <ul className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-[17px] tertiary_text">
                    <li className="flex items-center gap-2"><span className='border rounded-full p-1 text-xs flex items-center justify-center w-[17px] h-[17px]'>✔ </span> Highly customizable</li>
                    <li className="flex items-center gap-2"><span className='border rounded-full p-1 text-xs flex items-center justify-center w-[17px] h-[17px]'> ✔</span> Pixel perfect design</li>
                    <li className="flex items-center gap-2"><span className='border rounded-full p-1 text-xs flex items-center justify-center w-[17px] h-[17px]'> ✔</span> Worldwide support</li>
                </ul>

                {/* Counter block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-center">
                    <div>
                        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold secondary_text"><CountUp end={450} /></p>
                        <p className="text-sm md:text-[17px] text-[#3e3f66]">Million of client logins monthly</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold secondary_text"><CountUp end={120} /></p>
                        <p className="text-sm md:text-[17px] text-[#3e3f66]">Languages and countries</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold secondary_text"><CountUp end={135} /></p>
                        <p className="text-sm md:text-[17px] text-[#3e3f66]">Percent yearly turnover increase</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold secondary_text"><CountUp end={324} /></p>
                        <p className="text-sm md:text-[17px] text-[#3e3f66]">Million active accounts</p>
                    </div>
                </div>

                {/* Image gallery */}
                <div className="custom-gallery-grid">
  {powerfulSolutionList.map((img, i) => (
    <div key={i} className={`gallery-item item-${i}`}>
      <img src={img.contentImg} alt="gallery" className="w-full h-auto rounded-lg" />
    </div>
  ))}
</div>
            </div>
        </section>
    );
};

export default PowerFullSolution
