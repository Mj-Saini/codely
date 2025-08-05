import React, { useState } from 'react';
import { pricingPlans } from './common/Helper';


const Pricing = () => {
    const [activePlan, setActivePlan] = useState('monthly');

    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Best plans, pay what you use
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center items-center space-x-4 mb-12" data-aos="fade-up" data-aos-duration="1500">
                    <span className={`cursor-pointer ${activePlan === 'monthly' ? 'font-semibold' : 'text-gray-400'}`} onClick={() => setActivePlan('monthly')}>Monthly</span>
                    <div className="relative w-12 h-6 bg-gray-300 rounded-full cursor-pointer" onClick={() => setActivePlan(activePlan === 'monthly' ? 'yearly' : 'monthly')}>
                        <span className={`absolute top-0.5 w-5 h-5 secondary_bg rounded-full transition-transform ${activePlan === 'monthly' ? 'translate-x-1' : 'translate-x-6'}`}></span>
                    </div>
                    <span className={`cursor-pointer ${activePlan === 'yearly' ? 'font-semibold' : 'text-gray-400'}`} onClick={() => setActivePlan('yearly')}>Yearly</span>
                    <span className="ml-2 text-sm text-white secondary_bg px-2 py-1 rounded font-medium">50% off</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1500">

                    {pricingPlans[activePlan].map((plan, idx) => (
                        <div
                            key={idx}
                            className={`rounded-lg p-6 group ${plan.highlight
                                ? 'secondary_bg text-white'
                                : 'border border-gray-200 bg-white text-[#3e3f66]'
                                }`}
                        >
                            <div className="relative w-24 h-24 ">
                                {/* Icon Image */}
                                <img
                                    src={plan.image}
                                    alt={plan.name}
                                    className="relative z-10 w-24 h-24"
                                />

                                {/* Hover circle with rotating dots */}
                                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                                   <div className="dot-wrapper">
                                        <span className="dot-circle" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: plan.dotColor }}></span>
                                        <span className="dot-circle" style={{ top: '50%', right: 0, transform: 'translateY(-50%)', backgroundColor: plan.dotColor }}></span>
                                        <span className="dot-circle" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor: plan.dotColor }}></span>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-6">
                                <h3 className={`text-base lg:text-xl font-semibold ${plan.highlight ? 'text-white' : 'secondary_text'}`}>
                                    {plan.name}
                                </h3>
                                <span className="text-sm md:text-[15px]">
                                    {plan.subtitle}
                                </span>
                            </div>

                            <div className="mb-6">
                                <span className={`text-3xl md:text-4xl lg:text-5xl font-bold ${plan.highlight ? 'text-white' : 'secondary_text'}`}>
                                    {plan.price}
                                </span>
                                <span className="text-sm md:text-[15px]">
                                    {plan.cycle}
                                </span>
                            </div>

                            <ul className="mb-6 space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex gap-1 items-center">
                                        <span
                                            className={`inline-flex items-center justify-center w-[17px] h-[17px] rounded-full border-2 text-xs font-bold ${feature.included
                                                ? 'text-[#009515] border-[#009515] bg-white'
                                                : 'text-[#ff0000] border-[#ff0000] bg-white'
                                                }`}
                                        >
                                            {feature.included ? '✓' : '✕'}
                                        </span>
                                        <p className={`text-sm md:text-[17px] ${plan.highlight ? 'text-white' : 'text-[#3e3f66]'}`}>
                                            {feature.label}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <div className="text-center">
                                <a
                                    href="#"
                                    className={`inline-block px-6 py-2 rounded-full font-medium transition ${plan.highlight
                                        ? 'bg-white secondary_text '
                                        : 'secondary_bg text-white hover:secondary_bg'
                                        }`}
                                >
                                    BUY NOW <i className="icofont-arrow-right ml-1"></i>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};


export default Pricing
