"use client";
import { buttonLable } from "@/constants/libs";
import Image from "next/image";
import React, { useState } from "react";

function Audit() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 0:
        return (
          <div className="w-full flex flex-col md:flex-row gap-2 p-2 pt-6 sml:p-10 mdl:p-1 mt-10 justify-center items-center">
            <Image
              src={`/image/service1.png`}
              alt="service image 1"
              width={400}
              height={300} // Set the appropriate height
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
            <Image
              src={`/image/service2.png`}
              alt="service image 2"
              width={400}
              height={300} // Set the appropriate height
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
            {/* Add other content for button 0 if needed */}
          </div>
        );
      case 1:
        return (
          <div className="w-full flex flex-col md:flex-row gap-2 p-2 pt-6 sml:p-10 mdl:p-1 mt-10 justify-center items-center">
            <Image
              src={`/image/project1.png`}
              alt="service image 2"
              width={400}
              height={300} // Set the appropriate height
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
            <Image
              src={`/image/project2.png`}
              alt="service image 2"
              width={400}
              height={300} // Set the appropriate height
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
            {/* Add other content for button 1 if needed */}
          </div>
        );
      case 2:
        // Handle other buttons similarly
        return (
          <div className="w-full flex flex-col md:flex-row gap-2 p-2 pt-6 sml:p-10 mdl:p-1 mt-10 justify-center items-center">
            <Image
              src={`/image/service1.png`}
              alt="service image 1"
              width={400}
              height={300} // Set the appropriate height
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
            <Image
              src={`/image/service2.png`}
              alt="service image 2"
              width={400}
              height={300} // Set the appropriate height
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
          </div>
        );
      case 3:
        // Handle other buttons similarly
        return (
          <div className="w-full flex flex-col md:flex-row gap-2 p-2 pt-6 sml:p-10 mdl:p-1 mt-10 justify-center items-center">
            <Image
              src={`/image/project1.png`}
              alt="service image 2"
              width={400}
              height={300} // Set the appropriate height
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
            <Image
              src={`/image/project2.png`}
              alt="service image 2"
              width={400}
              height={300} // Set the appropriate height
              className="w-full md:w-1/2 mdl:w-[400px]"
            />
          </div>
        );
      // Add more cases if you have additional buttons
      default:
        return null;
    }
  };
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <div className="flex flex-col mdl:flex-row w-full max-w-7xl">
        <div className="flex flex-col w-full mdl:w-1/2 px-2 ">
          <div className="grid grid-cols-2 sml:grid-cols-4  w-full">
            {buttonLable.map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`py-4 px-2 min-w-[100px] text-[14px] text-black  rounded-md ${
                  activeButton === index ? "bg-orange-400" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {renderContent()}
        </div>
        <div className="relative flex flex-col w-full mdl:w-1/2 bg-[#EEEEEE] rounded-sm p-8 gap-4 overflow-hidden">
          <div className="absolute bottom-0 right-0">
            <svg
              width="210"
              height="427"
              viewBox="0 0 210 427"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-3.05176e-05 213.328C-3.05176e-05 331.146 93.8394 426.656 209.596 426.656C325.353 426.656 419.192 331.146 419.192 213.328C419.192 95.5102 325.353 0 209.596 0C93.8394 0 -3.05176e-05 95.5102 -3.05176e-05 213.328ZM324.232 213.328C324.232 277.767 272.908 330.005 209.596 330.005C146.285 330.005 94.9605 277.767 94.9605 213.328C94.9605 148.889 146.285 96.6512 209.596 96.6512C272.908 96.6512 324.232 148.889 324.232 213.328Z"
                fill="#56697A"
                fillOpacity="0.2"
              />
              <ellipse
                cx="72.8384"
                cy="74.1352"
                rx="72.8384"
                ry="74.1352"
                transform="matrix(-1 0 0 1 282.435 139.193)"
                fill="#F59620"
                fillOpacity="0.32"
              />
            </svg>
          </div>
          <div className="flex flex-col w-full  gap-4">
            <h1 className="text-[32px] text-[#F59620] font-[600]">
              Audit & consultancys
            </h1>
            <p className="text-[16px] line-clamp-6 leading-6 text-center md:text-start text-black font-[400]">
              Our team of international experts specializes in providing
              profound insights and strategic guidance aimed at enhancing global
              IT infrastructure. With a keen focus on increasing efficiency and
              minimizing risk on an international scale, we assist organizations
              in achieving operational excellence that transcends geographical
              boundaries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audit;
