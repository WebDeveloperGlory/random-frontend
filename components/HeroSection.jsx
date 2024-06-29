import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import Search from './Search'

const HeroSection = () => {
  return (
    <div className='bg-green-600 text-white px-4 pt-4 space-y-6 relative' >
        <h1 className='font-bold text-4xl' >Homecare you can rely on</h1>
        <p className='text-lg' >Stay safe, independent and comfortable in your own home with GoodOaks visiting or live-in homecare.</p>
        <p className='font-bold text-lg' >Find your local GoodOaks branch</p>
        <Search />
        <p className='underline underline-offset-4 cursor-pointer'>View all branches</p>
        <div className='rounded-xl w-full h-64 bg-white' >
            {/* Image Goes Here */}
        </div>
        <button className='bg-lime-500 rounded-full px-8 py-4 flex gap-2 items-center absolute -bottom-6 right-8' >
            <p>Watch</p>
            <FaCirclePlay className='w-6 h-6' />
        </button>
    </div>
  )
}

export default HeroSection