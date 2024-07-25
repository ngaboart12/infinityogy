"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Link from "next/link";
import SingleProject from "./projects/SingleProject";

const CaseStudies = () => {
  const [openProeject,setOpenProejct] = useState(false)
  const [currentProject,setCurrentProject] = useState(0)
  useEffect(() => {    AOS.init({ duration: 2000 });
  }, []);
  const casestudies = [
    {
      id: 1,
      name: "Company Management System",
      client: "Tuza Rwanda",
      type: "Web Application",
      image: [`/image/employee2.png`,``],
      date: "August 2023",
      link: "https://infinity-management.netlify.app/",
      desciription: "Our Company Management System is a robust and comprehensive solution designed to streamline your business operations and enhance productivity. Whether you're a small business or a large enterprise, our platform offers a suite of tools to manage various aspects of your company efficiently."
    },
    {
      id: 2,
      name: "SAGA BAY Hotel Management System",
      client: "SAGA BAY Restaurant",
      type: "Wep Application",
      image: [`/image/sagabay.png`],
      date: "March 2024",
      link: "https://resto-portal.up.railway.app/",
      desciription: "Welcome to SAGA BAY Hotel Management System, an all-inclusive platform designed to streamline and enhance the management of your hotel operations. From reservations to customer service, our system offers a suite of tools to ensure your hotel runs smoothly and efficiently, providing an exceptional experience for your guests."
    },
    {
      id: 3,
      name: "Properties Investment Web Application",
      client: "Properties Investment Rwanda",
      type: "Web Application",
      image: [`/image/properties.PNG`,`/image/proper1.png`,`/image/proper2.png`,`/image/proper3.png`],
      date: "October 2023",
      link: "https://www.propertiesinvestment.rw/",
      desciription: "Our Properties Investment Web Application is a comprehensive platform designed to revolutionize the way you buy, sell, and rent properties. Whether you're looking for your dream home, a rental property, or even vehicles like cars, our application offers a seamless experience tailored to meet your needs."
    },
    {
      id: 4,
      name: "Tuza Podcast UI/UX Design",
      client: "Tuza Rwanda",
      type: "UI/UX Development",
      image: [`/image/legalconnect.png`],
      date: "October 2023",
      link: "/",
      desciription: "Tuza Podcast aims to offer an engaging and user-friendly platform for podcast enthusiasts. Our UI/UX design focuses on creating an immersive experience that enhances discovery, listening, and interaction with your favorite podcasts."
    },
    {
      id: 5,
      name: "Infinity Driver",
      client: "Infinity Tech Solution",
      type: "Web Application",
      image: [`/image/infinityDrive.png`,`/image/driver1.png`,`/image/driver2.png`],
      date: "October 2023",
      link: "https://infinitydriver.rw/",
      desciription: "At Infinity Drive, we make the journey to obtaining your provisional driving license easy and straightforward. Our platform provides all the resources you need to understand the requirements and successfully complete the necessary steps to get your provisional license."
    },
    {
      id: 6,
      name: "Mega Consulting Website",
      client: "Mega Consulting Company",
      type: "Web Application",
      image: [`/image/mega.PNG`],
      date: "October 2023",
      link: "https://www.megaconsulti.com/",
      desciription: "Welcome to Mega Consulting, your trusted partner in delivering expert solutions for business growth and strategic success. Our website is designed to reflect our commitment to excellence and provide an intuitive experience for clients seeking top-tier consulting services."
    },
    {
      id: 7,
      name: "Cosmas Massage House Website",
      client: "Cosmas Massage House Company",
      type: "UI/UX Development",
      image: [`/image/cosmas.PNG`],
      date: "October 2023",
      link: "https://cosmashouseltd.com/",
      desciription: "Welcome to Cosmas Massage House, your serene retreat for relaxation and wellness. Our website is designed to offer a calming and intuitive experience, allowing you to explore our range of massage services and book appointments with ease."
    },
    {
      id: 8,
      name: "All Cleaning website and system UI/UX Design",
      client: "All Cleaning Company",
      type: "UI/UX Development",
      image: [`/image/cleaning.png`],
      date: "October 2023",
      link: "/all_cleaning",
      desciription: "All Cleaning is dedicated to providing top-notch cleaning services with a user-friendly online platform that facilitates easy booking, service management, and customer engagement. Our UI/UX design aims to create an efficient, intuitive, and aesthetically pleasing experience for both clients and service providers."
    },
  ];

  const handelSelectProject=(index)=>{
    setCurrentProject(index)
    setOpenProejct(true)
  
  }
  return (
    <>
        <div className=" bg-gradient-to-br from-[white] to-[#f2f2f2] ">
    <div className="max-w-6xl mx-auto flex px-10 justify-center py-20 w-full ">
      <div className=" flex flex-col items-center gap-4 md:gap-10">
        <div>
          <a
            href="#"
            className=" py-2 px-2 bg-[#FBECD8] text-[#F59620] rounded-sm font-outfit"
          >
            Case studies
          </a>
        </div>
        <h1
          data-aos="fade-left"
          className="text-[24px] sm:text-[36px] w-[300px] sm:w-[620px] text-black text-center font-bold font-outfit"
          style={{ lineHeight: 1 }}
        >
          We develop <span className="text-[#F59620] capitalize">products</span> that
          address issues faced by customers.
        </h1>

        <div
          className="grid  sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-20 items-center"
        >
          { casestudies.map((item,index) => (
            <div
              key={item.id}
              className="relative cursor-pointer flex max-w-[100vh] flex-col gap-[20px]"
            >
              <div   onClick={()=> handelSelectProject(index)} className="h-[45vh]  ">
                <div className=" absolute p-2 rounded-md mt-4  right-2 bg-[#FBECD8] text-[#F59620]">
                  <span className="font-outfit">{item.date}</span>
                </div>

                <Image
                  src={item.image[0]}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                  width={400}
                  height={0}
                
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#56697A] text-[12px] font-outfit">
                  CLIENT: <span className="text-black">{item.client}</span>
                </span>
                <span className="text-[18px] font-bold text-black font-outfit">
                  {item.name}
                </span>
                <span className="text-[#56697A] text-[14px] font-outfit">
                  {item.type}
                </span>
                <Link href={item.link} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 11.7256C4 11.3459 4.28215 11.0322 4.64823 10.9825L4.75 10.9756L17.934 10.9762L13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88011 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.3181 11.2323 20.3517 11.274 20.3802 11.318C20.3883 11.3313 20.3965 11.3448 20.4042 11.3587C20.4114 11.3705 20.4178 11.3828 20.4239 11.3953C20.4324 11.4134 20.4407 11.4321 20.4482 11.4512C20.4543 11.4659 20.4594 11.4802 20.464 11.4947C20.4696 11.5125 20.4749 11.5316 20.4796 11.551C20.483 11.5645 20.4857 11.5775 20.4881 11.5906C20.4914 11.61 20.4943 11.6301 20.4963 11.6504C20.498 11.666 20.4991 11.6813 20.4997 11.6967C20.4998 11.7061 20.5 11.7158 20.5 11.7256L20.4996 11.7547C20.4991 11.7694 20.498 11.7841 20.4966 11.7988L20.5 11.7256C20.5 11.773 20.4956 11.8193 20.4872 11.8642C20.4853 11.8749 20.483 11.8859 20.4804 11.8969C20.4751 11.9194 20.4689 11.9412 20.4618 11.9625C20.4584 11.9731 20.4543 11.9844 20.45 11.9956C20.4412 12.0182 20.4317 12.0397 20.4212 12.0607C20.4163 12.0705 20.4109 12.0808 20.4052 12.0911C20.3958 12.1077 20.3861 12.1235 20.3759 12.139C20.3687 12.1499 20.3607 12.1613 20.3524 12.1724L20.3459 12.1811C20.3257 12.2075 20.3038 12.2325 20.2803 12.256L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L17.932 12.4762L4.75 12.4756C4.33579 12.4756 4 12.1399 4 11.7256Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className=" py-4">
          <p className="text-3xl text-black">In need of one of the above projects?</p>
          <div className="flexCenter py-4">
          <Link href={'#contactus'} className=" text-black border border-[#F59620] p-2 hover:bg-[#F59620] hover:text-white">Contact Us</Link>
          <Link href={'/schedule'} className="bg-[#F59620] text-white p-2 mx-3 hover:text-black hover:bg-transparent hover:border hover:border-[#F59620]">Schedule a meet with us</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    <SingleProject setOpenProejct={setOpenProejct} openProeject={openProeject} data={casestudies[currentProject]} />
    </>

  );
};

export default CaseStudies;
