import React from 'react'
import CommonHero from '../components/common/CommonHero'
import CommonBtn from '../components/common/CommonBtn'
import ItSolution from '../components/ItSolution'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import ServiceSection from '../components/ServiceSection'
import { serviceList, WhyChooseLiList } from '../components/common/Helper'

const ServiceList2 = () => {
    return (
        <div>
            <CommonHero heading='service list 2' pageName="our services" />
            <ServiceSection heading=' Your service title here' subheading='Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and.' mapData={serviceList} listStyling="hidden" />


            <ServiceSection heading=' Your service title here' subheading='Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry’s standard dummy text ever since the when an unknown printer took a galley of type and.'  reverseRow={true} listing={WhyChooseLiList} cardStyling="hidden"  />
          
            <Testimonials slidesToShow={1} dotStyling="hometestimonials" rightSecStyling="w-full md:w-7/12" profileImg="hidden"/>
                  <Pricing/>
        </div>
    )
}


export default ServiceList2
