import React from 'react';

import fuel from "../images/fuel.jpg"
import diesel from "../images/diesel1.jpg"



const AboutUs = () => {
  return (
    <div name='platforms' className='w-full my-32 mb-10'>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 pt-4  rounded'>
            <div>
            
            <img src={fuel}  alt="" className=" w-[400px] h-[400px]" />
              <p className='text-lg pt-2 pb-4'>
               FOUNDER
              </p>
            </div>
            <div>
              
              <img src={diesel}  alt="" className=" w-[400px] h-[400px]" />
              <p className='text-lg pt-2 pb-4'>
              CO FOUNDER

              </p>
          </div>
            
        </div>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-lg font-bold text-center'>What is Our Goal?</h2>
        <p className='text-sm py-8 text-gray-500 text-center'>
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
            <h3 className='font-bold text-sm'>Our Mission</h3>
              <p className='text-sm pt-2 pb-4'>
              At DMOpen, our mission is to facilitate seamless 
              transactions in the oil trading industry by providing 
              reliable procurement, distribution, and financial services. 
              We strive to exceed our clients' expectations through innovation, 
              integrity, and excellence in every aspect of our operations. 
              Our commitment to quality, sustainability, and customer satisfaction 
              drives us to continually improve and adapt to meet the 
              evolving needs of the market
              </p>
            </div>
            <div>
              <h3 className='font-bold text-lg'>Our Vission</h3>
             
              <p className='text-sm pt-2 pb-4'>
              Our vision at DMOpen is to be the leading provider 
              of comprehensive oil trading solutions, recognized 
              for our unwavering commitment to professionalism, 
              transparency, and ethical business practices. We aspire
               to set new standards of excellence in the industry, 
               leveraging cutting-edge technology and strategic partnerships 
               to deliver unparalleled value to our clients. Through our 
               dedication to innovation, sustainability, and customer-centric
                approach, we aim to shape the future of oil trading and contribute 
                to the growth and prosperity of our stakeholders and the communities we serve.

              </p>
          </div>
            
        </div>


      </div>
    </div>
  );
};

export default AboutUs;