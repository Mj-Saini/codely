import React from "react";
import sideImage from "../assets/image/png/start-free-side-img.png";
import playIcon from "../assets/image/png/play_icon.png";
import AnimLine from "./common/AnimLine";
import CommonBtn from "./common/CommonBtn";
import { Link } from "react-router-dom";

const FreeTrial = () => {
    return (
        <section className="relative overflow-hidden primary_bg shadow_custom py-20 mt-10 lg:mx-15 lg:rounded-4xl" id="free-trial">
            {/* Vertical lines */}
            <AnimLine />

            <div className=" z-10 container custom_container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Text Block */}
                <div className="lg:w-1/2 text-white">
                    <div className="mb-6" data-aos="fade-up" data-aos-duration="1500">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your 14-Day Free Trial</h2>
                        <p className="text-base md:text-lg text-gray-300">
                            Instant free download from Apple and Play Store. Lorem Ipsum is simply dummy
                            text of the printing.
                        </p>
                    </div>

                    <ul
                        className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        {[
                            "Free 14-day trial",
                            "No credit card required",
                            "Support 24/7",
                            "Cancel anytime",
                        ].map((text, index) => (
                            <li key={index} className="flex items-center gap-2 text-white text-[16px]">
                                <span className="flex items-center  justify-center w-4.5 h-4.5 rounded-full border border-white mt-1 text-white">
                                    &#10003;
                                </span>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>


                    <div className="flex items-center gap-6" data-aos="fade-up" data-aos-duration="1500">
                        <div>
                            <CommonBtn btnName='Get Started' btnStyling='' path='/contact-us' />
                        </div>

                        <Link
                            to="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-white"
                        >
                            <div className="relative flex items-center gap-6">
                                <img src={playIcon} alt="Play" className="" />
                                <span className="">WATCH PROMO</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Side Image */}
                <div className="mt-12 lg:mt-0 lg:w-1/2 ">
                    <div className="relative lg:absolute lg:w-1/2 lg:bottom-0 lg:right-0 lg:overflow-clip lg:rounded-tl-2xl">
                        <img src={sideImage} alt="Start Free Side" className="w-full lg:h-auto " />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default FreeTrial
