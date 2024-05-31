import React from "react";
import Navbar from "./Navbar";
import { FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full flex flex-col items-center h-[100vh]  justify-center">
      <div className=" bg-gradient-to-tr to-[#000000] from-[#282525] absolute opacity-90 top-0 -z-10 w-full h-full "></div>
      <div className="absolute opacity-70  h-full w-full flex items-center justify-center -z-20 overflow-hidden">
        <Image
          src={`/image/banner2.jpg`}
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Navbar />
      <div className="px-2 h-full mx-auto max-w-lg flex gap-[26px] mb-14">
        <div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center justify-center text-[20px] mt-6"
        >
          <h1 className="text-[40px] sm:text-[56px] font-bold text-[#F59620]  text-center font-outfit leading-none ">
            Unlock the Power <br /> of Technology"
          </h1>
          <p className="text-white mt-2  font-outfit">
            Innovate , Navigate, Elevate
          </p>
          <div className=" flex  gap-4 mt-6">
            <a
              href="#contactus"
              className=" px-6 py-2 border border-[#F59620] text-[#F59620]
             hover:text-white hover:bg-[#F59620] rounded-md"
            >
              Reach us
            </a>
            <a href="/aboutus" target="_blank"
     
              className=" px-6 py-2 border border-[#F59620] text-white
            bg-[#F59620] rounded-md"
            >
              About us
            </a>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <a href="#service" className="text-center text-white">
        <FaArrowCircleDown size={30}/>
        </a>
      </div>
      <Link href={'/offers'}>
      <div className="fixed items-center p-2 bottom-5 text-black right-5 bg-[#E5E5E5] rounded-xl z-10 justify-end border-white w-[20vw] shadow-2xl">
        {/* <p>
        🎉Exciting news!🎉 Here comes a great opportunity from our company. Software Development Training Program which will help people with or without any foundation in software development yet you are committed to dive in. Register now here.
      </p> */}
        <p>
        🎉Exciting news!🎉 Great opportunity from our company. Professional Software Development Training Program. 
        </p>
        <a href="#ddd" className="text-[#F59620] cursor-pointer">Register now here.</a>
      </div>
      </Link>
    </div>
  );
}

export default Hero;
