import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageRouter from './pageRouter';
import logo from "../images/logo.jpg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(false); // Change to always close the nav

  return (
    <>
      <div className="fixed w-full h-[80px] bg-[#0E0DAA] text-[#fff] drop-shadow-lg z-50">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold mr-4 sm:text-4xl">
              <img className="h-8 w-10 transition-transform transform hover:scale-105" src={logo} alt="logo" />
            </Link>
            <ul className="hidden md:flex">
              <li><Link className="p-4" to="/ourservices" >Our Services</Link></li>
              <li><Link className="p-4" to="/contact-us" >Contact Us</Link></li>
              <li><Link className="p-4" to="/about-us" >About</Link></li>
             
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <Link to="login" className="px-8 py-3">
              Login
            </Link>
           
          </div>
          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-[#0E0DAA] text-[#fff] w-40 px-8 z-50'}>
          <li className="text-left"><Link className="p-4 block" onClick={handleClose} to="/" >Home</Link></li>
          <li className="text-left"><Link className="p-4 block" onClick={handleClose} to="/about-us" >About</Link></li>
          <li className="text-left"><Link className="p-4 block" onClick={handleClose} to="/ourservices" >Our Services</Link></li>
          <li className="text-left"><Link className="p-4 block" onClick={handleClose} to="/platforms" >Platforms</Link></li>
          <li className="text-left"><Link className="p-4 block" onClick={handleClose} to="/pricing" >Pricing</Link></li>

          <div className="flex flex-col my-4">
            <Link to="/login" className="bg-transparent text-white border border-white px-8 py-3 mb-4">Login</Link>
            <Link to="/signup" className="bg-white text-[#0E0DAA] px-8 py-3">Sign Up</Link>
          </div>
        </ul>
      </div>

      <div className="pt-[80px]">
        <PageRouter />
      </div>
    </>
  );
};

export default Navbar;
