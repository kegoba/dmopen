import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';


import fuel from "../images/fuel.jpg"
import diesel from "../images/diesel1.jpg"
import energy from "../images/energ.jpg"
import oil from "../images/oil.jpg"
import lpg from "../images/lpg.jpg"


const ourServices = () => {
  return (
    <div name='platforms' className='w-full my-32 mb-10'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>What We Offer</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        Dmopen is dedicated to facilitating the efficient and profitable 
        buying and selling of oil products, offering expertise, strategic 
        insights, and comprehensive support to navigate the complexities of the oil market.
        </p>

        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 pt-4'>

        
            <div>
            <h3 className='font-bold text-lg'>Dmopen Petrol (PMS) </h3>
            <img src={fuel}  alt="" className="" />
              <p className='text-lg pt-2 pb-4'>
              At DMOpen, we provide high-quality Petrol (PMS) 
              that ensures optimal performance for your vehicles.
              Our petrol is refined to meet international standards, 
              offering clean combustion and efficient engine operation. 
              With DMOpen Petrol, you can count on smooth acceleration, 
              reduced emissions, and enhanced engine longevity
              </p>
            </div>
            <div>
              <h3 className='font-bold text-lg'>Dmopen Diesel</h3>
              <img src={diesel}  alt="" className="" />
              <p className='text-lg pt-2 pb-4'>
              Dmopen Diesel is engineered to deliver superior performance
               and reliability for your diesel-powered vehicles and equipment.
                Our diesel fuel is formulated with advanced additives to provide 
                excellent lubricity, prevent injector fouling, and improve fuel 
                efficiency. Whether for commercial fleets or personal vehicles, 
                DMOpen Diesel ensures consistent power delivery and minimal downtime.

              </p>
          </div>
            <div>
              <h3 className='font-bold text-lg'>Dmopen Oil</h3>
              <img src={oil}  alt="" className="" />
              <p className='text-lg pt-2 pb-4'>
              Dmopen Oil offers a comprehensive range of high-quality
               lubricating oils for various applications. 
               From automotive engine oils to industrial lubricants, 
               our products are designed to meet the demands of modern 
               engines and machinery. With DMOpen Oil, you can trust in 
               superior protection against wear, corrosion, and thermal breakdown, 
               ensuring optimal performance and durability.

              </p>
          </div>
            <div>
              <h3 className='font-bold text-lg'>Liquefied Petroleum Gas (LPG)</h3>
              <img src={lpg}  alt="" className="" />
              <p className='text-lg pt-2 pb-4'>
                  Dmopen provides reliable Liquefied Petroleum Gas (LPG)
                   solutions for residential, commercial, and industrial 
                   applications. Our LPG is clean-burning, cost-effective, 
                   and environmentally friendly, making it an ideal energy 
                   source for cooking, heating, and power generation. With 
                   Dmopen LPG, you can enjoy consistent performance, c
                   onvenience, and peace of mind.
              </p>

          </div>

            <div>
              <h3 className='font-bold text-lg'>Renewable Energy</h3>
              <img src={energy}  alt="" className="" />
              <p className='text-lg pt-2 pb-4'>
              
                As part of our commitment to sustainability, 
                DMOpen offers innovative renewable energy 
                solutions to meet the growing demand for 
                clean and green energy. From solar power to 
                wind energy, we harness the natural resources 
                available to provide reliable and eco-friendly 
                electricity generation solutions. With DMOpen 
                Renewable Energy, you can reduce your carbon 
                footprint and contribute to a greener future.

              </p>

          </div>
            <div>
              <h3 className='font-bold text-lg'>Lubricant Oil</h3>
              <img src={oil}  alt="" className="" />
              <p className='text-lg pt-2 pb-4'>
              
          Dmopen Lubricant Oil is specially formulated 
          to protect and enhance the performance of your 
          machinery and equipment. Our lubricants offer 
          superior film strength, thermal stability, and 
          corrosion resistance, ensuring smooth operation 
          and extended service life. Whether for automotive, 
          industrial, or marine applications, DMOpen Lubricant 
          Oil delivers unmatched reliability and performance
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourServices;