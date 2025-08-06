import React from 'react'
import CommonHero from '../components/common/CommonHero'
import Faqs from '../components/Faqs'

const FaqsPage = () => {
  return (
    <>
          <CommonHero heading='faqs' pageName="faq" />
          <div className='bg-white relative z-10'>
              <Faqs/>
          </div>
    </>
  )
}

export default FaqsPage
