import Image from 'next/image'
import React from 'react'

const parterns = {
    imgSrc : [
        '/image/mtn-logo.jpg',
        '/image/oracle.png',
        '/image/dnr-logo.jpeg',
        '/image/paypack.png',
        '/image/mega_consult_logo.png',
        '/image/risa.jpg',
        '/image/airtel-logo.png',
        '/image/saga.png',
        '/image/pro-inve.png',
        '/image/EastAfrica.png',
        '/image/cosma.png',
        '/image/auca-logo.png',
    ]
}
const Partners = () => {
  return (
    <section className='bg-[#E5E5E5]'>

    <div className='text-black/80 padding-container max-container mb-2'>
        <div>
            <h1 className='text-[32px] text-[#F59620] font-bold text-center py-10'>Our Partners</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
                { parterns.imgSrc.map((link) => (
                    <div key={link} className=''>
                        <Image src={link} alt='' width={200} height={200} />
                    </div>
                ))}
            </div>
        </div>
    </div>
    </section>

  )
}

export default Partners