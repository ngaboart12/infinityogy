import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


export const VideoPart = () => {

    const videos = [
        'https://www.youtube.com/embed/4RBGMByxMPM?rel=0',
        'https://www.youtube.com/embed/sKFDlTk4XIk?rel=0',
        'https://www.youtube.com/embed/o-SfK1XPsU4?rel=0',
        'https://www.youtube.com/embed/WI3lVZmVLgk?rel=0',
    ]

    return (
    <div className='padding-container max-container py-24 text-black'>
        <div className='mx-auto text-center py-10'>
            <h2 className='text-3xl font-semibold text-[#F59620]'>Take your time and watch us</h2>
        </div>
        <div className='w-full md:w-[85vw] md:grid grid-cols-3 gap-10'>
            { videos.map((v) => (
            <div className="ratio ratio-16x9 ">
                <iframe src={v} key={v} width={350} height={300} title="YouTube video" allowFullScreen></iframe>
            </div>
            ))}
        </div>
    </div>
  )
}
