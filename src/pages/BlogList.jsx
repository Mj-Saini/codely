import React from 'react'
import CommonHero from '../components/common/CommonHero'
import {  FolderOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import {  blogPostsList, categories, recentPosts, tags } from '../components/common/Helper';


const BlogList = () => {

 
    return (
        <>
            <CommonHero heading='Blog list classic' pageName="blog list" />
              <section className="py-16 relative z-10 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-10">
          {blogPostsList.map((post, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg box_shadow group" data-aos="fade-up" data-aos-duration="1500">
             
                <img src={post.img} alt="image" className="w-full rounded" />
           
              <div className="mt-4 p-4 lg:p-6 box_shadow overflow-clip">
                <span className="text-xs md:text-[14px] text-[#3e3f66]">{post.date}</span>
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold text-[#3B82F6] duration-300 mb-4 group-hover:text-[#9333EA]">
                 {post.title}
                </h2>
                <p className="text-sm md:text-[17px] text-[#3e3f66]">{post.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <img src={post.authorImg} alt="author" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="text-sm md:text-[17px] secondary_text font-semibold">{post.author}</h4>
                      <span className="text-sm text-black">Author</span>
                    </div>
                  </div>
                  <div className="text-sm bg-purple-100 primary_text px-5 py-1 rounded-full capitalize">
                    {post.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-duration="1500">
            <ul className="flex items-center space-x-2">
            <span className="mx-2 text-black border border-[#3e3f66] rounded flex items-center justify-center w-10 h-10 text-xl -pt-0.5 -scale-100"> <span className='-mt-1'>»</span> </span>
              {[1, 2, 3, 4].map((num) => (
                <li key={num}>
                  <Link
                    to="#"
                    className={`px-3 py-1 rounded border border-[#3e3f66] flex items-center justify-center w-10 h-10 ${num === 2 ? 'primary_bg text-white' : ''}`}
                  >
                    {num}
                  </Link>
                </li>
              ))}
                                     <span className="mx-2 text-black border border-[#3e3f66] rounded flex items-center justify-center w-10 h-10 text-xl -pt-0.5 "> <span className='-mt-1'>»</span></span>
           
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Search */}
          <div className="bg-white lg:p-6 box_shadow rounded" data-aos="fade-up" data-aos-duration="1500">
            <h3 className="text-lg lg:text-xl font-semibold secondary_text">Search post</h3>
            <div className="flex border border-[#212529] rounded-xl overflow-hidden mt-4 items-center justify-between  px-4">
              <input
                type="text"
                className="w-full py-4 focus:outline-none"
                placeholder="Search..."
              />

              <span className="primary_text">
                <Search size={24} />
              </span>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white lg:p-6 box_shadow rounded" data-aos="fade-up" data-aos-duration="1500">
            <h3 className="text-lg lg:text-xl font-semibold secondary_text mb-4">Recent Post</h3>
            <ul className="space-y-4">
              {recentPosts.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <img src={item.img} alt="image" className="w-16 h-16 rounded" />
                  <div className='pe-10'>
                    <h4 className="text-sm md:text-[15px] text-[#3B82F6] duration-300 group-hover:text-[#9333EA] font-semibold">
                      {item.title}
                    </h4>
                    <span className="text-xs md:text-[15px] text-[#3e3f66]">{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white lg:p-6 shadow rounded" data-aos="fade-up" data-aos-duration="1500">
            <h3 className="text-lg lg:text-xl font-semibold secondary_text mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <li key={idx} className="flex gap-2 text-sm md:text-[17px] font-semibold items-center">
                  <span className='secondary_text'>  <FolderOpen size={16} /></span> {cat.name}
              
                  <span className="text-sm md:text-[17px] font-semibold">({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-white lg:p-6 shadow rounded" data-aos="fade-up" data-aos-duration="1500">
            <h3 className="text-lg lg:text-xl font-semibold secondary_text mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-sm md:text-[17px] text-[#3e3f66] hover:bg-[#3B82F6] hover:text-white duration-300 font-semibold rounded-lg border border-[#9E9BA7] px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
         </>
    )
}



export default BlogList
