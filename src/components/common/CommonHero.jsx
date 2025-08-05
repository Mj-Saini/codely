import React from 'react'
import AnimLine from './AnimLine'
import Header from './Header'

const CommonHero = ({pageName,heading}) => {
  return (
    <>
       <div className="h-[60vh] flex items-center justify-center">
                <Header />
                <AnimLine heroHeight='60vh'/>
                <div className="container custom_container relative z-10 mx-auto px-4">
                    <div className="flex flex-col justify-center items-center text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[55px] font-bold mb-4 leading-tight text-white capitalize">{heading}</h2>
                        <ul className="flex justify-center sm:justify-start gap-2 text-sm text-gray-600">
                            <li>
                                <span className=" text-white text-base sm:text-[17px]  font-medium">
                                    Home
                                </span>
                            </li>
                            <li className='-mt-0.5'><span className="mx-1 text-white text-xl ">»</span></li>
                            <li>
                                <span className=" text-white text-base sm:text-[17px] font-medium capitalize">
                                    {pageName}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CommonHero
