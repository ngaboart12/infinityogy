import { Navbar } from "@/components";
import Image from "next/image";


const page = () => {
    return (
        <section className=" text-black text-3xl">
            <head>
                <title>SAGA BAY MS | Infinity Tech Solution</title>
            </head>
            <Navbar />
            <div className="max-container padding-container py-6">
            <div className="py-4">
                <h2 className="bg-[#e09942]  p-2">SAGA BAY HOTEL MANAGEMENT SYSTEM</h2>
            </div>
            {/* photos */}
            <div className="border border-red-300 bg-slate-400 py-4 flex">
                <div className="border border-green-500 py-4 w-full md:w-[50%]">
                    <img
                    src={'/image/homepage.png'}
                    alt="homepage"
                    width="auto"
                    height="auto"
                    // className="w-full h-full"
                    />
                </div>
                <div className="border border-blue-800 w-full md:w-[50%] grid grid-cols-2 gap-4 ">
                    <div className="border border-blue-800 rounded-lg"></div>
                    <div className="border border-blue-800 rounded-lg"></div>
                    <div className="border border-blue-800 rounded-lg"></div>
                    <div className="border border-blue-800 rounded-lg"></div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default page; 