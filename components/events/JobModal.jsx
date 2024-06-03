import React from "react";
import { useRef, useEffect } from "react";
import "./jobModal.css";
import Link from "next/link";

const JobModal = ({ isOpen, onClose, jobDetails }) => {
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay absolute bg-black/10 rounded-md p-6 w-full h-full top-0 left-0 flex justify-center items-center">
      <div
        className="modal  bg-white  mt-10 px-4 relative pb-10 sm:80% md:w-[50%] rounded-md gap-4 flex flex-col items-center justify-center"
        ref={modalRef}
      >
        {/* <button className="modal-close" onClick={onClose}>
          &times;
        </button> */}
        <div className=" absolute top-[-6vh] py-4 w-[100px] flex items-center justify-center  bg-orange-400 rounded-md">
          <h1 className="text-[30px] text-white">
            {jobDetails.jobName.substring(0, 2).toUpperCase()}
            {/* Professional Software Development Training Program */}
          </h1>
        </div>
        <div className="disc py-14">
          <div className=" items-center flex flex-col">
            <h2 className="flex text-black  flex-row items-center gap-1 mt-4">
              <span className="text-orange-400">Job Title:</span>
              {/* {jobDetails.jobName} */}
              Professional Software Development Training Program
            </h2>
            <p className="text-black">
              Cost of Attendance:{" "}
              <span className="text-orange-400 ">50,000</span> Frws
            </p>
            <p className="text-black">
              Time: <span className="text-orange-400">Flexible time</span>
            </p>
          </div>

          <p className="text-start text-black px-5">
            This is Professional IT, Training Program, designed by Infinity Tech
            Solution Ltd in partnership with GGO. Our one-month program is
            perfect for secondary school students, university students, recent
            graduates, and anyone interested in IT. The training costs 50,000
            FRW as mentioned above, payable in installments, and covers various
            tech stacks to ensure you gain the latest skills in the field. This
            partial training program offers flexibility and high-quality
            education. Join us and take the next step in your IT career!
            <ul className="p-2 text-black/50">
              <li>
                &bull;JavaScript (React JS, Express, Node.js) with emphasis on Load
                balancing and Microservices architecture.
              </li>
              <li>
              &bull;Python (Django, Flask) with a focus on Load balancing and
                Microservices implementation.
              </li>
              <li>
              &bull;Cloud services like AWS, with an emphasis on Load balancing and
                Microservices deployment.
              </li>
              <li>
              &bull;Database administration, including SQL and NoSQL databases, with
                a focus on Load balancing and Microservices integration.
              </li>
              <li>
                {" "}
                &bull;Advanced integration solutions for payment gateways and security
                protocols.
              </li>
              <li>&bull;UI & UX design principles.</li>
            </ul>
            Our goal is to provide a professional and enriching learning
            experience that prepares you for success in the industry. Whether
            you're a secondary school graduate, university student, or working
            professional, our training program is tailored to meet your needs.
            Please take a moment to fill out the registration form below to
            secure your spot in our upcoming training session. Rest assured; the
            form will only take you 2 minutes to complete. We eagerly anticipate
            your participation in our program.
          </p>
          {/* Add other job details as needed */}
        </div>
        <Link href="https://forms.gle/nsgsBKmMQasVzzuGA" target="_blank">
          <button className="rounded-md border p-4 hover:bg-orange-400/80 bg-orange-400 text-white w-[200px]">
            Apply now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobModal;
