import React, { useState } from "react";
import NoIntern from "../NoIntern";

const Internship = () => {
  const [openModal, setOpenModal] = useState(false);
  const handelModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div id="ddd" className="px-[10px] md:px-[50px] py-24 flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px] items-center">
        <h1 className="text-center text-[42px] max-w-[600px] leading-[44px] font-[600]">
          <span className="text-[#F59620] ">Software Development</span>{" "}
          Internship Opportunity
        </h1>
        <span className="text-center text-gray-500 font-[300] max-w-[800px]">
          Thank you for considering our Professional IT, Training Program,
          designed by Infinity Tech Solution Ltd in partnership with GGO. Our
          one-month program is perfect for secondary school students, university
          students, recent graduates, and anyone interested in IT.
        </span>
        <a
          href="https://forms.gle/nsgsBKmMQasVzzuGA"
          target="_blank"
          // onClick={handelModal}
          className="p-3 cursor-pointer rounded-[14px] text-[18px] mt-4 px-10 w-[200px] flex items-center justify-center bg-[#F59620] text-white"
        >
          Apply Now
        </a>
      </div>
      {openModal ? <NoIntern handelModal={handelModal} /> : ""}
    </div>
  );
};

export default Internship;
