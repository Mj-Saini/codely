import React, { useState } from "react";
import CommonBtn from "./common/CommonBtn";
import placeArrow from '../assets/image/png/paperplane.png'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    website: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    website: "",
    message: "",
    agree: false,
  })
  };

  return (
    <section className="relative bg-white" data-aos="fade-up" data-aos-duration="2000">
      <div className="container mx-auto px-4 shadow py-20">
        <div className="bg-[#f6f4fe] rounded-xl lg:p-8 relative ">
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[40px] font-bold secondary_text mb-4">
              Leave a message
            </h2>
            <p className="text-sm md:text-[17px] text-[#3e3f66]">
              Fill up the form below, our team will get back soon
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6 w-full lg:w-2/3 mx-auto relative z-10" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input border border-[#ccc] bg-white outline-none px-3 py-4 rounded-xl"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input border border-[#ccc] bg-white outline-none px-3 py-4 rounded-xl"
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="form-input border border-[#ccc] bg-white outline-none px-3 py-4 rounded-xl"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-input border border-[#ccc] bg-white outline-none px-3 py-4 rounded-xl"
              >
                <option value="">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input border border-[#ccc] bg-white outline-none px-3 py-4 rounded-xl"
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="form-input border border-[#ccc] bg-white outline-none px-3 py-4 rounded-xl"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input border border-[#ccc] bg-white outline-none px-3 py-4 rounded-xl w-full"
              placeholder="Your message"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agree"
                id="term"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />
              <label htmlFor="term" className="text-[13px] text-[#3e3f66]">
                I agree to receive emails, newsletters and promotional messages
              </label>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
             <CommonBtn btnName="send message" btnStyling="!uppercase" type="submit" />

            </div>
          </form>

          {/* Paperplane image */}
        </div>
          <img
            src={placeArrow}
            alt="paper plane"
            className="absolute top-1/3 lg:bottom-0 right-32 z-0 pointer-events-none"
          />
      </div>
    </section>
  );
};

export default ContactForm;
