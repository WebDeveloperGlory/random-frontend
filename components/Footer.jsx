import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import Search from './Search'

const Footer = () => {
  return (
    <div className='text-white'>
        <div className='pt-10 bg-lime-500 flex items-center flex-col space-y-6' >
            <h1 className='font-bold text-2xl' >Find Your Local Branch</h1>
            <Search />
            <div className='flex gap-2 items-center' >
                <p>All Branches</p>
                <FaChevronDown className='w-5 h-5' />
            </div>
            <div className='h-80' >
                {/* Image Here */}
            </div>
        </div>
        <div className='bg-green-700 py-10 flex flex-col items-center gap-6' >
            <h1 className='text-3xl font-bold' >Logo</h1>
            <p className='text-center'>Each GoodOaks Homecare franchise office is independently owned and operated</p>
            <div className='space-y-2 text-center fond-bold' >
                <p className='underline underline-offset-8 text-lg font-bold'>National GoodOaks Website</p>
                <p className='underline underline-offset-8 text-lg font-bold'>Speak With HQ</p>
                <p className='underline underline-offset-8 text-lg font-bold'>Franchise Oppurtunities</p>
            </div>
            <p className='font-bold' ><span>Sitemap</span> | <span>Privacy Policy</span> | <span>Contact Us</span></p>
            <p>2024 GoodOaks Homecare</p>
        </div>
    </div>
  )
}

export default Footer