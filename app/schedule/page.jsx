"use client"
import { Footer, Navbar, Navbar2 } from '@/components'
import React from 'react'
import { InlineWidget } from 'react-calendly'

const page = () => {
  return (
    <div>
      <Navbar2 />
      <div>
        <h2 className='mt-4 text-2xl text-center text-[#F59620]'>Schedule a meeting with us</h2>
      </div>
      <div className='max-container padding-container'>
        <InlineWidget url='https://calendly.com/mzeegustmann12' /> 
      </div>
      <Footer />
    </div>
  )
}

export default page