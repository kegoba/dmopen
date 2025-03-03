import React from "react";

import fuel from "../images/fuel.jpg";
import diesel from "../images/diesel1.jpg";

const AboutUs = () => {
  return (
    <div name="platforms" className="w-full my-16 bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">About Us</h2>
        
        {/* Founder and Co-founder Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {[{ image: fuel, role: "FOUNDER" }, { image: diesel, role: "CO-FOUNDER" }].map((person, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center">
              <img src={person.image} alt={person.role} className="w-full h-72 object-cover rounded-md transition-transform transform hover:scale-105" />
              <p className="text-lg font-semibold mt-4 text-gray-700 transition-transform transform hover:scale-105">{person.role}</p>
            </div>
          ))}
        </div>

        {/* Company Goals */}
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">What is Our Goal?</h2>
          <p className="text-gray-600 text-center mt-4 transition-transform transform hover:scale-105">
            At Dmopen, our primary goal is to become the preferred partner for oil trading companies worldwide, offering unparalleled expertise, reliability, and value. We aim to establish long-term relationships built on trust, integrity, and mutual success. By consistently exceeding our clients' expectations and delivering exceptional service, we strive to solidify our position as a trusted leader in the industry. Our goal is not only to achieve business success but also to contribute positively to the communities we operate in and to the sustainable development of the oil trading sector as a whole.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
          {[{
            title: "Our Mission",
            text: "At DMOpen, our mission is to facilitate seamless transactions in the oil trading industry by providing reliable procurement, distribution, and financial services. We strive to exceed our clients' expectations through innovation, integrity, and excellence in every aspect of our operations. Our commitment to quality, sustainability, and customer satisfaction drives us to continually improve and adapt to meet the evolving needs of the market."
          }, {
            title: "Our Vision",
            text: "Our vision at DMOpen is to be the leading provider of comprehensive oil trading solutions, recognized for our unwavering commitment to professionalism, transparency, and ethical business practices. We aspire to set new standards of excellence in the industry, leveraging cutting-edge technology and strategic partnerships to deliver unparalleled value to our clients. Through our dedication to innovation, sustainability, and customer-centric approach, we aim to shape the future of oil trading and contribute to the growth and prosperity of our stakeholders and the communities we serve."
          }].map((section, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 transition-transform transform hover:scale-105">{section.title}</h3>
              <p className="text-gray-600 mt-2 transition-transform transform hover:scale-105">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
