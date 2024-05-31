import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const parterns = [
    {
        id: 1,
        imgSrc: '/image/mtn-logo.png',
        web: 'https://www.mtn.co.rw/',
        alt: "mtn",
    },
    {
        id: 3,
        imgSrc: '/image/oracle.png',
        web: 'https://www.oracle.com/',
        alt: "oracle",
    },
    {
        id: 2,
        imgSrc: '/image/red-logo.svg',
        web: 'https://int.dnrpartners.com/ ',
        alt: "dnr",
    },
    {
        id: 4,
        imgSrc: '/image/PAYPACK.png',
        web: 'https://paypack.rw/',
        alt: "paypack",
    },
    {
        id: 5,
        imgSrc:'/image/mega_consult_logo.png',
        web: 'https://www.megaconsulti.com/',
        alt: "mega",
    },
    {
        id: 6,
        imgSrc: '/image/risa.jpg',
        web: 'https://www.risa.gov.rw/',
        alt: "risa",
    },
    {
        id: 7,
        imgSrc: '/image/airtel-logo.png',
        web: 'https://www.airtel.co.rw/',
        alt: "airtel",
    },
    {
        id: 8,
        imgSrc: '/image/saga.png',
        web: '',
        alt: "saga",
    },
    {
        id: 9,
        imgSrc: '/image/pro-inve.png',
        web: 'https://www.propertiesinvestment.rw/',
        alt: "pro-inve",
    },
    {
        id: 11,
        imgSrc: '/image/cosma.png',
        web: "https://web-cosmas.vercel.app/",
        alt: "cosmas",
    },
    {
        id: 10,
        imgSrc: '/image/eaur.jpg',
        web: 'https://eaur.ac.rw/',
        alt: "east",
    },
    {
        id: 12,
        imgSrc: '/image/auca-logo.png',
        web: 'https://auca.ac.rw/',
        alt: "auca",
    }
]
const Partners = () => {
  return (
    <section className='bg-white'>

    <div className='text-black/80 padding-container max-container mb-2'>
        <div>
            <h1 className='text-[32px] text-[#F59620] font-bold text-center py-10'>Our Partners</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                { parterns.map((link) => (
                    <div key={link} className=''>
                        <Link href={link.web} target='_blank' >
                            <Image src={link.imgSrc} alt={link.alt} width={200} height={200} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </section>

  )
}

export default Partners