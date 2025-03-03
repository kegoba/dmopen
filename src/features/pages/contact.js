import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


const ContactUs = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 flex justify-center">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8 grid md:grid-cols-2 gap-8"
      
      >
        {/* Left Side - Image */}
        <div className="w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact.avif')" }}>
       
        </div>

        {/* Right Side - Contact Form & Info */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center">Get In Touch With Us</h2>
          <p className="text-center text-gray-600 mt-2">
            Investment, Business or Enquiries? Let’s hear from you!
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full  text-white bg-[#0E0DAA]  p-3 rounded-md hover:bg-orange-600 transition"
            >
              Send Mail
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-4">
              <FiPhone className="text-orange-500 text-xl" />
              <p className="text-gray-700">+234-908-750-2020</p>
            </div>
            <div className="flex items-center space-x-4">
              <FiMail className="text-orange-500 text-xl" />
              <p className="text-gray-700">info@pinnacleoilandgas.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-orange-500 text-xl" />
              <p className="text-gray-700">
                6, Samuel Manuwa Street, Victoria Island, Lagos, Nigeria.
              </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
