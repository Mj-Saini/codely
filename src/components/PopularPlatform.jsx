import React from "react";
import { integrationPlatforms } from "./common/Helper";


const PopularPlatform = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Easy integration <br className="hidden md:block" /> with popular platforms
          </h2>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {integrationPlatforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg border-b-[5px] border-transparent hover:border-[#3B82F6] transition duration-300 bg-white"
            >
              <img src={platform.img} alt={platform.name} className="h-12 w-auto object-contain" />
              <p className="text-center text-sm font-medium text-[#3e3f66]">{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPlatform
