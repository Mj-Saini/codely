import React from 'react'
import CommonHero from '../components/common/CommonHero'
import Pricing from '../components/Pricing'
import Faqs from '../components/Faqs'

const PricingPage = () => {
    return (
        <div>
            <CommonHero heading='Best Pricing' pageName="our Pricing" />
            <div className='bg-white z-10 relative'>
                <Pricing />
            </div>
            <Faqs/>
        </div>
    )
}


export default PricingPage
