import React from "react";
import { blogPosts } from "./common/Helper";

// Dummy blog data


const Blogs = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container custom_container mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
            Read latest <span className="text-primary">story</span>
          </h2>
          <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting <br />
            industry orem Ipsum has been the standard dummy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-auto rounded-xl" />
                <span className="absolute top-4 left-4 bg-white secondary_text px-2 py-1 text-sm font-medium rounded-lg">
                  <span className="font-bold block text-center">{post.date.day}</span> {post.date.month}
                </span>
              </div>
              <div className="p-5">
                <div className="flex text-sm text-[#3e3f66] gap-4 mb-3">
                  <span className="flex items-center gap-1">
                    <i className="icofont-user-suited"></i> Admin
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="icofont-speech-comments"></i> {post.comments} Comments
                  </span>
                </div>
                <h3 className="text-base lg:text-xl font-semibold mt-2 secondary_text">{post.title}</h3>
                <p className="text-sm md:text-[17px] text-[#3e3f66] max-w-2xl mx-auto py-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-flex items-center secondary_text font-semibold text-sm hover:underline"
                >
                  READ MORE <i className="icofont-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs
