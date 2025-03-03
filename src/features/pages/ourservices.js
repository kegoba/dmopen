import React from "react";

import fuel from "../images/fuel.jpg";
import diesel from "../images/diesel1.jpg";
import energy from "../images/energ.jpg";
import oil from "../images/oil.jpg";
import lpg from "../images/lpg.jpg";

const services = [
  {
    title: "Dmopen Petrol (PMS)",
    image: fuel,
    description:
      "At DMOpen, we provide high-quality Petrol (PMS) that ensures optimal performance for your vehicles. Our petrol meets international standards, offering clean combustion and efficient engine operation.",
  },
  {
    title: "Dmopen Diesel",
    image: diesel,
    description:
      "Dmopen Diesel is engineered to deliver superior performance and reliability for diesel-powered vehicles. It prevents injector fouling, improves fuel efficiency, and ensures minimal downtime.",
  },
  {
    title: "Dmopen Oil",
    image: oil,
    description:
      "Dmopen Oil offers high-quality lubricating oils for various applications. From automotive engine oils to industrial lubricants, we ensure superior protection against wear and corrosion.",
  },
  {
    title: "Liquefied Petroleum Gas (LPG)",
    image: lpg,
    description:
      "Dmopen provides reliable LPG solutions for residential, commercial, and industrial use. Our LPG is clean-burning, cost-effective, and environmentally friendly, ensuring consistent performance.",
  },
  {
    title: "Renewable Energy",
    image: energy,
    description:
      "As part of our sustainability commitment, DMOpen offers innovative renewable energy solutions, including solar and wind energy, to promote a cleaner and greener future.",
  },
  {
    title: "Lubricant Oil",
    image: oil,
    description:
      "Dmopen Lubricant Oil protects and enhances machinery performance with superior thermal stability and corrosion resistance, ensuring smooth operation and longevity.",
  },
];

const OurServices = () => {
  return (
    <div className="w-full my-16 bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          What We Offer
        </h2>
        <p className="text-lg py-4 text-gray-600 text-center">
          Dmopen facilitates efficient buying and selling of oil products,
          providing strategic insights and support in the oil market.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
