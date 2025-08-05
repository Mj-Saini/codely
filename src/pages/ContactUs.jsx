import React from 'react'
import Header from '../components/common/Header'
import AnimLine from '../components/common/AnimLine'
import { contactCards } from '../components/common/Helper'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactFrom'
import CommonHero from '../components/common/CommonHero'

const ContactUs = () => {
    return (
        <>
           <CommonHero heading='contact us' pageName="Contact us"/>

            <section
                className="py-20 bg-white"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="100"
            >
                <div className="container custom_container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {contactCards.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#f6f4fe] p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 text-center relative overflow-hidden"
                            >
                                <div className="relative inline-block mb-4 group">
                                    <img src={item.icon} alt={item.title} className="mx-auto w-14 h-14" />
                                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                                        <div className="dot-wrapper">
                                            <span className="dot-circle" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#6B21A8' }}></span>
                                            <span className="dot-circle" style={{ top: '50%', right: 0, transform: 'translateY(-50%)', backgroundColor: '#6B21A8' }}></span>
                                            <span className="dot-circle" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#6B21A8' }}></span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-base lg:text-xl font-semibold secondary_text">{item.title}</h3>
                                <p className="text-sm md:text-[17px] text-[#3e3f66] mt-2 mb-3">{item.desc}</p>
                                <Link
                                    to={
                                        item.type === 'email'
                                            ? `mailto:${item.linkText}`
                                            : item.type === 'phone'
                                                ? `tel:${item.linkText.replace(/[^+\d]/g, '')}`
                                                : item.type === 'address'
                                                    ? `https://www.google.com/maps?q=${encodeURIComponent(item.linkText)}`
                                                    : item.linkHref
                                    }
                                    target={item.type === 'address' ? '_blank' : undefined}
                                    rel={item.type === 'address' ? 'noopener noreferrer' : undefined}
                                    className="text-sm md:text-[17px] text-[#3e3f66] primary_text font-semibold"
                                >
                                    {item.linkText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactForm />
            
             <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map - New York"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1664399300741!5m2!1sen!2sin"
            width="100%"
            height="510"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[510px]"
          ></iframe>
        </div>
      </div>
    </section>
        </>
    )
}

export default ContactUs
