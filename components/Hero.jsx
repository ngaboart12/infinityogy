"use client"
import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaArrowCircleDown } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [openAlert,setOpenAlert] = useState(false)
  return (
    <div className="w-full flex flex-col items-center h-[100vh]  justify-center">
      <div className=" bg-gradient-to-r from-[#101115] to-[#080606] absolute opacity-95 top-0 -z-10 w-full h-full "></div>
      <div className="absolute opacity-90  h-full w-full flex items-center justify-center -z-20 overflow-hidden">
        <Image
          src={`/image/herroBack.png`}
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Navbar />
      <div className="px-2 h-full mx-auto  flex gap-[26px] mb-14">
        <div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center max-w-[700px] justify-center text-[20px] mt-6"
        >
          <h1 className="text-[40px] sm:text-[46px]   font-bold text-[#F59620]  text-center font-outfit leading-none ">
            Unlock the Power <br /> of Technology
            <span className="text-[#ffffff]">"</span>
          </h1>
          <p className="text-[#dbdbdb] font-[400] text-center text-[18px] mt-2  ">
            Innovate , Navigate, Elevate
           
          </p>
          <div className=" flex  gap-4 mt-6">
            <a
              href="#contactus"
              className=" px-8 py-2 border border-[#F59620] text-[#F59620]
             hover:text-white hover:bg-[#F59620] "
            >
              Reach us
            </a>
            <a
              href="/aboutus"
              target="_blank"
              className=" px-9 py-2 border border-[#F59620] text-white
            bg-[#F59620] "
            >
              About us
            </a>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <a href="#service" className="text-center text-white">
          <FaArrowCircleDown size={30} />
        </a>
      </div>
      <div className={`fixed items-center flex flex-col  w-[300px] ${openAlert ? "p-4 h-[35vh]" : "h-[0vh]"} overflow-hidden rounded-[12px] bottom-[86px]  text-black right-5 bg-[#F59620] z-[400]   duration-300 transition-all cursor-pointer border-white shadow-2xl`}>
        <div className="w-full flex flex-col gap-[20px]">
          <span className="text-center text-white">
            🎉Exciting news!🎉 Great opportunity from our company. Professional
            Software Development Training Program.
          </span>
          <a href="https://forms.gle/nsgsBKmMQasVzzuGA" className="py-2 flex items-center justify-center rounded-[12px] w-full bg-white">
            <span>Join us Now</span>
          </a>
        </div>
      </div>
      <div onClick={()=> setOpenAlert(!openAlert)} className={`fixed ${openAlert ? "" : "animate-bounce"}  items-center flex w-[60px] h-[60px] rounded-full p-2 bottom-5 text-black right-5 bg-[#F59620] z-[400] justify-center hover:scale-110 duration-300 transition-all cursor-pointer border-white shadow-2xl`}>
        <AiFillAlert color="white" size={30} />
      </div>
    </div>
  );
}

export default Hero;
