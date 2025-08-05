import React from 'react'
import Header from '../components/common/Header'
import AnimLine from '../components/common/AnimLine'
import Hero from '../components/Hero'
import Solutions from '../components/Solutions'
import AnalyzeData from '../components/AnalyzeData'
import Collabrations from '../components/Collabrations'
import AdvancedFeatures from '../components/AdvancedFeatures'
import PowerFullSolution from '../components/PowerFullSolution'
import PopularPlatform from '../components/PopularPlatform'
import TrustedPartners from '../components/TrustedPartners'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Faqs from '../components/Faqs'
import InterfaceSlider from '../components/InterfaceSlider'
import FreeTrial from '../components/FreeTrial'
import Blogs from '../components/Blogs'
import NeedSupport from '../components/NeedSupport'
import { communicationImages, floatImages } from '../components/common/Helper'

import analyzeIcon from '../assets/image/png/soution_icon1.png'
import communitationIcon from '../assets/image/png/soution_icon3.png'
import analyticsBgImg from '../assets/image/png/Analyze_bg.png'
import communicationBgImg from '../assets/image/png/Analyze_bg.png'

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen  flex items-center justify-center">
      <Header />
        <AnimLine heroHeight='100vh'/>
        <Hero />
        
         {/* Wave SVG at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18
              58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f6f4fe" />
          </g>
        </svg>
      </div>
      </div>
      <Solutions />
      <AnalyzeData heading="Analyze your data with powerful tool" icon={analyzeIcon} mapData={floatImages} bgImg={analyticsBgImg}/>
      <Collabrations/>
      <AnalyzeData heading="Easy communication wherever you are live" icon={communitationIcon} mapData={communicationImages} bgImg={communicationBgImg} />
    
      <AdvancedFeatures />
      <PowerFullSolution /> 
      <PopularPlatform />
      <Testimonials slidesToShow={1} dotStyling="hometestimonials" rightSecStyling="w-full md:w-7/12" profileImg="hidden"/>
      <TrustedPartners/>
      <Pricing/>
      <Faqs/>
      <InterfaceSlider/>
      <FreeTrial/>
      <Blogs/>

    </>
  )
}

export default LandingPage
