import React from 'react'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-green-600 text-white' >
        <div>
            <h1 className='font-bold text-2xl' >Logo</h1>
        </div>
        <div className='flex gap-4 items-center' >
            <button className='rounded-full px-6 py-4 bg-lime-500' >Find Your Branch</button>
            <FaBars className='w-8 h-8' />
        </div>
    </div>
  )
}

export default Navbar