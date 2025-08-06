import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { teamMembers } from './common/Helper';
import { Link } from 'react-router-dom';



const OurTeam = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container custom_container mx-auto px-4">
                <div className="text-center mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1500">
                    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">Our Experience Team</h2>
                    <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has been the standard dummy.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white group hover:bg-[linear-gradient(90deg,_#6B21A8,_#581C87)] transition-all duration-300 shadow rounded-lg overflow-hidden"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="relative p-2">
                                <img src={member.image} alt={member.name} className="w-full object-cover" />

                                <div className="absolute top-10 right-5 flex flex-col gap-2 w-full items-end">
                                    {[Facebook, Twitter, Instagram].map((Icon, iconIndex) => (
                                        <Link
                                            key={iconIndex}
                                            to="#"
                                            className={`absolute -right-5 transition-all duration-300 ease-out translate-x-5 opacity-0 group-hover:right-0  group-hover:opacity-100 group-hover:translate-x-0 ${iconIndex === 0 ? 'top-0 delay-100' : iconIndex === 1 ? 'top-10 delay-200' : 'top-20 delay-300'} bg-white p-1 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:text-white duration-300`}
                                        >
                                            <Icon size={20} className="stroke-strong group-hover/icon:stroke-white transition" />
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            <div className="text-center pb-6 pt-3 sm:py-6 px-4 bg-transparent">
                                <h3 className="text-lg lg:text-xl font-semibold secondary_text group-hover:text-white">{member.name}</h3>
                                <span className="text-sm md:text-[15px] text-[#3e3f66] group-hover:text-white">{member.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default OurTeam
