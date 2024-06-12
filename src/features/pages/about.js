import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';


import fuel from "../images/fuel.jpg"
import diesel from "../images/diesel1.jpg"
import energy from "../images/energ.jpg"
import oil from "../images/oil.jpg"
import lpg from "../images/lpg.jpg"


const AboutUs = () => {
  return (
    <div name='platforms' className='w-full my-32 mb-10'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>What is Our Goal?</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        At Dmopen, our primary goal is to become the preferred partner 
        for oil trading companies worldwide, offering unparalleled 
        expertise, reliability, and value. We aim to establish 
        long-term relationships built on trust, integrity, and 
        mutual success. By consistently exceeding our clients' 
        expectations and delivering exceptional service, we strive 
        to solidify our position as a trusted leader in the industry. 
        Our goal is not only to achieve business success but also to 
        contribute positively to the communities we operate in and to 
        the sustainable development of the oil trading sector as a whole.
        </p>

        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pt-4'>
            <div>
            <h3 className='font-bold text-lg'>Our Mission</h3>
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
              <h3 className='font-bold text-lg'>Our Vission</h3>
             
              <p className='text-lg pt-2 pb-4'>
              Dmopen Diesel is engineered to deliver superior performance
               and reliability for your diesel-powered vehicles and equipment.
                Our diesel fuel is formulated with advanced additives to provide 
                excellent lubricity, prevent injector fouling, and improve fuel 
                efficiency. Whether for commercial fleets or personal vehicles, 
                DMOpen Diesel ensures consistent power delivery and minimal downtime.

              </p>
          </div>
            
        </div>

        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pt-4'>
            <div>
            
            <img src={fuel}  alt="" className="" />
              <p className='text-lg pt-2 pb-4'>
               FOUNDER
              </p>
            </div>
            <div>
              
              <img src={diesel}  alt="" className="" />
              <p className='text-lg pt-2 pb-4'>
              CO FOUNDER

              </p>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default AboutUs;