import Image from "next/image";
import React, { useState } from "react";

const SingleProject = ({openProeject,setOpenProejct,data}) => {
  const [currentImage,setCurrentImage] = useState(0)
  return (
    <div className={`w-full ${openProeject ? "h-screen p-4" : "h-0"} duration-300 transition-all overflow-hidden  flex   items-center justify-center bg-black/30 backdrop-blur-[4px] fixed z-50 top-0`}>
        <div className="flex flex-col w-full h-full bg-white p-3">
            <span onClick={()=> setOpenProejct(false)} className="text-end font-[900] cursor-pointer">X</span>
      <div className="w-full h-full  flex flex-col lg:flex-row gap-[20px]  lg:p-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-[6px] h-1/2 lg:h-full">
          <div className="w-full lg:h-[80%] rounded-[4px] overflow-hidden  ">
            <Image
              src={data.image[currentImage] ? data.image[currentImage] : data.image[0] }
              alt="saga"
              width={1000}
              height={1000}
              className="w-full object-fill rounded-[4px]"
            />
          </div>
          <div className="grid grid-cols-4 gap-[20px]">
            {data.image.map((item,index)=>{
              return(
                <div onClick={()=> setCurrentImage(index)} className="md:w-[100px] h-[70px] w-[70px] md:h-[100px] rounded-[4px] border cursor-pointer">
                <Image
                  src={item}
                  alt="saga"
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-[4px] "
                />
              </div>

              )
            })}
         
          
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-[20px] h-full">
          <h1 className="text-[18px] text-center sm:text-start font-[600]">
            {data.name}
          </h1>
          <div className="flex flex-col sm:flex-row gap-[20px] items-center">
            <div className=" px-2 py-2 rounded-[4px] border-l-2 border-[#ffba67]  flex items-center justify-center">
              <span className="text-[#ffba67]">Innovative Solution</span>
            </div>
            <div className="flex flex-row items-center gap-[10px]">
              <span>Done:</span>
              <span className="text-[14px] text-gray-500">07 june 2024</span>
            </div>
            <div>
              <a href="" className="text-[#ffba67] font-[600] text-[14px]">Visit site</a>
            </div>
          </div>
          <div className="wordScroll h-[20vh] md:h-[60vh] w-full overflow-y-scroll">

          <span className="text-[14px] text-gray-600 ">
             {data.desciription}
          </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SingleProject;
