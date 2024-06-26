import { Footer, Navbar } from "@/components";
import Image from "next/image";
import React from "react";


const page = () => {

    const images = [
        '/cleaning1.jpg',
        '/cleaning2.jpg',
        '/cleaning3.jpg',
    ]
    return (
        <main className="text-black">
            <Navbar />
            <div className="padding-container max-container py-10">
                <h2 className="py-10 text-3xl">Welcome to the All Cleaning Mobile UI/UX Design</h2>
                <div className="mx-14">
                    { images.map((image) => (
                        <Image 
                        src={image}
                        alt="images"
                        width={1000}
                        height={580}
                        layout
                        priority
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default page;