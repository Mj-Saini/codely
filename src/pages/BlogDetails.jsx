import React from 'react'
import CommonHero from '../components/common/CommonHero'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import userProfile from '../assets/image/png/testi_01.png'
import blogListImg from '../assets/image/png/blog-list_01.png'
import { socialLinks } from '../components/common/Helper'
import { Link } from 'react-router-dom'
import userProflle from '../assets/image/png/blog_d01.png'
import userProflle2 from '../assets/image/png/blog_d02.png'
import CommonBtn from '../components/common/CommonBtn'


const BlogDetails = () => {

    return (
        <div>
            <CommonHero heading='blog single' pageName="blog single" />


            <section className="py-20 relative z-10 bg-white" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                <div className="container custom_container mx-auto px-4  md:-mt-48 ">
                    <div style={{ boxShadow: '0px 8px 30px rgba(192, 186, 215, 0.80)' }} className=" w-full lg:w-10/12 mx-auto bg-white  p-5  md:p-14 rounded-2xl">
                        {/* Blog Info */}
                        <div data-aos="fade-up" data-aos-duration="2000" className='lg:px-14'>
                            <span className="text-xs md:text-[14px] text-[#3e3f66]">12 Dec, 2022</span>
                            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] xl:text-[50px] font-bold text-[#3B82F6] duration-300 mb-4 group-hover:text-[#9333EA]">
                                Providing IT solution that diverse business verticals lorem ipsum
                            </h2>
                            <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                            </p>
                            {/* Author Block */}
                            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4" data-aos="fade-up" data-aos-duration="1000">
                                <div className="flex items-center gap-4">
                                    <img src={userProfile} alt="Author" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <h4 className="text-lg md:text-xl secondary_text font-medium">Stephan Joe</h4>
                                        <span className="text-sm md:text-[17px] text-[#3e3f66]">Author</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-sm bg-purple-100 primary_text px-5 py-1 rounded-full capitalize">Software</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Image */}
                        <div data-aos="fade-up" data-aos-duration="1500" className='my-8'>
                            <img src={blogListImg} alt="Blog Detail" className="w-full rounded" />
                        </div>

                        {/* Blog Content */}
                        <div className="space-y-6 lg:px-14" data-aos="fade-up" data-aos-duration="1500">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl  font-bold text-[#3B82F6] duration-300 mb-4 group-hover:text-[#9333EA] lg:pe-20">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </h2>
                            <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
                            </p>
                            <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                Essentially unchanged. It was popularised in the 1960s with the release of Letraset...
                            </p>

                            {/* Bullet List */}
                            <ul className="space-y-3 list-none">
                                {[
                                    'Lorem Ipsum is simply dummy',
                                    'Text of the printing and typesetting industry',
                                    'Lorem Ipsum has been the industrys standard',
                                    'Dummy text ever since the when.',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="flex items-center justify-center w-5.5 h-5.5 rounded-full secondary_bg mt-1 text-white">
                                            &#10003;
                                        </span>
                                        <p className='text-lg lg:text-xl text-[#391e6c] font-medium'>{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-xl sm:text-2xl lg:text-3xl  font-bold text-[#3B82F6] duration-300 mb-4 group-hover:text-[#9333EA] lg:pe-20">Lorem Ipsum is simply dummy.</h2>
                            <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                            </p>
                        </div>

                        {/* Quote Block */}
                        <div className="primary_bg lg:mx-14 lg:py-9 p-5 lg:px-14 relative rounded-2xl my-9" data-aos="fade-up" data-aos-duration="1500">
                            <p className="text-8xl ff_playfair text-white">“</p>
                            <h3 className='text-lg lg:text-xl text-white font-semibold'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer.
                            </h3>
                            <p className="text-8xl ff_playfair text-end text-white">”</p>
                        </div>

                        {/* More Info */}
                        <div data-aos="fade-up" data-aos-duration="1500" className='lg:px-14'>
                            <h3 className='text-lg lg:text-xl secondary_text font-semibold'>Simply dummy text lorem Ipsum is.</h3>
                            <p className="text-sm md:text-[17px] text-[#3e3f66] pt-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                            </p>
                        </div>

                        {/* YouTube Embed */}
                        <div className="w-full aspect-video  my-6 rounded-2xl" data-aos="fade-up" data-aos-duration="1500">
                            <iframe
                                controls
                                className="w-full h-full rounded-2xl"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>

                        {/* Last Paragraph */}
                        <div data-aos="fade-up" data-aos-duration="1500" className='lg:px-14'>
                            <p className='text-lg lg:text-xl secondary_text font-semibold'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                            </p>
                        </div>

                        {/* Share Section */}
                        <div data-aos="fade-up" data-aos-duration="1500" className='lg:px-14 mt-9'>
                            <div>
                                <h3 className='text-lg lg:text-xl secondary_text font-semibold mb-3'>Share this</h3>
                                <ul className="flex space-x-4 my-3 md:my-0">
                                    {socialLinks.map((item, i) => (
                                        <li key={i} className='mt-2'>
                                            <Link to={item.url} className="text-black hover:bg-white hover:text-[#3B82F6] duration-300 border border-[#ccc] w-9 h-9 flex items-center justify-center rounded-full">
                                                {item.icon}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container custom_container mx-auto px-4">
                    <div style={{ boxShadow: '0px 8px 30px rgba(192, 186, 215, 0.80)' }} className="w-full lg:w-10/12 mx-auto bg-white rounded-2xl p-5  md:p-14">
                        {/* Posted Comments */}
                        <div className="mb-12">
                            <div data-aos="fade-up" data-aos-duration="1500" className="mb-6">
                                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold text-[#3B82F6] duration-300 mb-4 group-hover:text-[#9333EA]">3 Comments</h2>
                            </div>
                            <div className="space-y-10">
                                {/* Comment 1 */}
                                <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 border-t border-[#ccc] py-7">
                                    {/* Left: Profile */}
                                    <div className="flex flex-shrink-0 w-full sm:w-[270px] gap-3">
                                        <div className="w-20 h-20 shrink-0">
                                            <img
                                                src={userProflle}
                                                alt="avatar"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                           
                                                <span className="text-xs md:text-[14px] text-[#3e3f66]">30 min ago</span>
                                                <h4 className="text-lg lg:text-xl font-semibold secondary_text">John Due</h4>
                                           
                                        </div>
                                    </div>

                                    {/* Right: Comment */}
                                    <div className="flex-1">
                                        <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                            the industry's standard dummy text ever since the when an unknown printer.
                                        </p>
                                    </div>
                                </div>


                                {/* Comment 2 (Reply) */}
                                    <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:ms-20 border-t border-[#ccc] py-7">
                                    {/* Left: Profile */}
                                    <div className="flex items-center flex-shrink-0 w-full sm:w-[270px] gap-3 ">
                                        <div className="w-20 h-20 shrink-0">
                                            <img
                                                src={userProflle2}
                                                alt="avatar"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                       <div className='flex flex-col justify-center'>
                                           
                                                <span className="text-xs md:text-[14px] text-[#3e3f66]">30 min ago</span>
                                                <h4 className="text-lg lg:text-xl font-semibold secondary_text">John Due</h4>
                                           
                                        </div>
                                    </div>

                                    {/* Right: Comment */}
                                    <div className="flex-1 ">
                                        <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                            the industry's standard dummy text ever since the when an unknown printer.
                                        </p>
                                    </div>
                                </div>

                                {/* Comment 3 */}
                                <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 border-y border-[#ccc] py-7">
                                    {/* Left: Profile */}
                                    <div className="flex items-center flex-shrink-0 w-full sm:w-[270px] gap-3">
                                        <div className="w-20 h-20 shrink-0">
                                            <img
                                                src={userProflle}
                                                alt="avatar"
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                      <div className='flex flex-col justify-center'>
                                           
                                                <span className="text-xs md:text-[14px] text-[#3e3f66]">30 min ago</span>
                                                <h4 className="text-lg lg:text-xl font-semibold secondary_text">John Due</h4>
                                           
                                        </div>
                                    </div>

                                    {/* Right: Comment */}
                                    <div className="flex-1">
                                        <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                            the industry's standard dummy text ever since the when an unknown printer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Comment Form */}
                        <div>
                            <div data-aos="fade-up" data-aos-duration="1500" className="mb-6">
                                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold text-[#3B82F6] duration-300 mb-4 group-hover:text-[#9333EA]">
                                    Leave a comment
                                </h2>
                                <p className="text-sm md:text-[17px] text-[#3e3f66]">
                                    Your email address will not be published. Required fields are marked *
                                </p>
                            </div>
                            <form data-aos="fade-up" data-aos-duration="1500">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Name *"
                                        className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Website"
                                        className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black"
                                    />
                                </div>
                                <textarea
                                    placeholder="Comments"
                                    className="w-full px-4 py-4 border border-[#9E9BA7] rounded-xl outline-none text-xs md:text-[15px] text-black  min-h-[120px] resize-none"
                                />
                              <div className="mt-8">
             <CommonBtn btnName="Post comments" btnStyling="!uppercase" type="submit" />

            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetails
