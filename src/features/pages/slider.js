import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const articles = [
  {
   
    description: 'Dmopen Diesel is engineered to deliver superior performance and reliability for your diesel-powered vehicles and equipment.',
    imgPath: '/images/diesel.jpg',
    imgAlt: 'someone eating a hamburger in a restaurant',
  },
  {
   
    description: ' At DMOpen, we provide high-quality Petrol (PMS) that ensures optimal performance for your vehicles.',
    imgPath: '/images/fuel.jpg',
    imgAlt: 'A plane in the sky',
  },
  {
   
    description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    imgPath: '/images/energ.jpg',
    imgAlt: 'Falling confetti',
  },
  {
   
    description: 'Dmopen Oil offers a comprehensive range of high-quality lubricating oils for various applications',
    imgPath: '/images/oil.jpg',
    imgAlt: 'multiple bills with different values and currencies',
  },
  {
   
    description: 'Dmopen provides reliable Liquefied Petroleum Gas (LPG)  solutions for residential, commercial, and industrial', 
     imgPath: '/images/lpg.jpg',
    imgAlt: 'multiple bills with different values and currencies',
  },
];

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // screen width of 1024px or less
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // screen width of 768px or less
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // screen width of 640px or less
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-14 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <button className="w-[250px] text-white bg-[#0E0DAA]  hover:bg-[#092256] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            What We Offer?
          </button>
        </div>
        <Slider {...settings} className="mt-20">
          {articles.map((article, index) => (
            <div key={index} className="px-4">
              <article className="bg-white shadow-md rounded overflow-hidden">
                <div className="aspect-w-16 aspect-h-10 lg:aspect-w-4 lg:aspect-h-3">
                  <img
                    className="object-cover w-full h-[300px] rounded"
                    src={article.imgPath}
                    alt={article.imgAlt}
                  />
                </div>
                <div className="px-7 pt-5 pb-10 lg:p-6">
                 
                  <p className="text-neutral-grayish-blue text-xs">
                    {article.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
