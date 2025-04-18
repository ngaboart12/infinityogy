"use client";
import Image from "next/image";
import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import NavModal from "./NavModal";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOPen] = useState(false);


  return (
    <div className="max-w-7xl h-fit mx-auto mt-5 items-center px-6 sm:px-10 md:px-20 w-full flex justify-between">
      <a href="/">
        <Image src={`/image/logo.png`} alt="logo" width={200} height={100} priority className="object-contain" />
      </a>
      <div className="links hidden md:flex font- text-[#ffffff]  text-[16px] gap-10 font-[500] items-center font-outfit">
        <a href="/" className="text-[#ffffff] no-underline hover:text-[#F59620]">
          Home
        </a>
        <a href="/ourworks" className="text-[#ffffff] no-underline hover:text-[#F59620]">
          Our works
        </a>
        <a href="/services" className="text-[#ffffff] no-underline hover:text-[#F59620]">
          Services
        </a>
        <a href="/offers" className="text-[#ffffff] no-underline hover:text-[#F59620]">
          Offers
        </a>
        <a href="/event" className="text-[#ffffff] no-underline hover:text-[#F59620]">
          Events
        </a>
        <a href="/aboutus" className="text-[#ffffff] no-underline hover:text-[#F59620]">
          About Us
        </a>
        <a
          href="#contactus"
          className=" px-10 py-[10px] border border-[#F59620] text-[#F59620]
         hover:text-white hover:bg-[#F59620] no-underline" 
        >
          Reach us
        </a>
      </div>

      <div className="flex md:hidden" onClick={() => setIsOPen(true)}>
        <VscThreeBars color="#56697A" size={40} />
      </div>

      <NavModal isOpen={isOpen} onClose={() => setIsOPen(false)}>
        <div className="absolute w-full z-20 flex h-full md:hidden px-10 py-10 left-0 top-20 rounded-l-lg">
          <div className="flex flex-col text-white/70 gap-4 text-[18px] hover:text-white hover:text-[19px] hover:transition-200 no-underline">
            <Link href="/" className="no-underline">Home</Link>
            <a href="/ourworks">Our works</a>
            <a href="/services">Services</a>
            <a href="/offers">Offers</a>
            <a href="/event">Events</a>
            <a href="/aboutus">About us</a>
            <button className="py-2 px-10 bg-[#F59620] rounded-md mt-4 hover:border hover:bg-[#56697A] hover:text-[#F59620]">
              Reach us
            </button>
          </div>        
        </div>
      </NavModal>
      
    </div>
  );
};

export default Navbar;
