import React from "react";
import { FaTruck, FaClock, FaPhoneAlt, FaMoneyBillWave } from "react-icons/fa";





const features = [
    {
      title: "Next Day Delivery",
      description: "92% of our orders are delivered within 24 hours.",
      icon: <FaClock className="text-orange-500 text-3xl" />,
    },
    {
      title: "Low Prices",
      description: "We buy fuel at the lowest price and pass the savings to you.",
      icon: <FaMoneyBillWave className="text-green-500 text-3xl" />,
    },
    {
      title: "Dedicated Account Managers",
      description: "An account manager will be your point of contact from day one.",
      icon: <FaPhoneAlt className="text-blue-500 text-3xl" />,
    },
    {
      title: "Same Day Emergency Delivery",
      description: "92% of orders are successfully delivered within 24 hours.",
      icon: <FaTruck className="text-gray-500 text-3xl" />,
    },
  ];




const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/images/refinery.jpg')" }}
    >
 
      <div className="absolute inset-0 bg-black opacity-50"></div>


      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
       
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Bulk Order</h2>
          <form className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-500 outline-none" />
              <input type="text" placeholder="Company Name" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
            <input type="text" placeholder="Your Delivery Address" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-500 outline-none" />
            <div className="grid grid-cols-2 gap-3">
              <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-500 outline-none" />
              <input type="tel" placeholder="Phone No" className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-orange-500 outline-none" />
            </div>
            <select className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Select Product Type</option>
            <option>Diesel</option>
            <option>Petrol</option>
            <option>Kerosene</option>
          </select>
          <select className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>How Many Litres?</option>
            <option>1000 Litres</option>
            <option>5000 Litres</option>
            <option>10000 Litres</option>
          </select>
            <button className="w-full text-white bg-[#0E0DAA]  hover:bg-[#092256] focus:ring-4 focus:outline-none focus:ring-blue-300  text-sm py-2 rounded-lg font-bold  transition">
              ORDER NOW
            </button>
          </form>
        </div>

      
        <div className="text-white text-center md:text-left ">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight transition-transform transform hover:scale-105">
            Leading the downstream oil and gas industry in Nigeria since 2004
          </h1>
          <p className="text-orange-400 mt-2 transition-transform transform hover:scale-105">
            We service global clients, in more than 20 countries in Africa & in Nigeria.
          </p>

       
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-start gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-black transition-transform transform hover:scale-105">{item.title}</h3>
                  <p className="text-sm text-gray-700 transition-transform transform hover:scale-105">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
