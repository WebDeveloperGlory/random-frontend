'use client'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const FaQDropdown = ({ title, text }) => {
    const [open, setOpen] = useState( false )
  return (
    <div className='bg-white rounded-3xl p-6' >
        <div className='flex justify-between items-center' >
            <p className='font-bold text-xl text-green-700'>{ title }</p>
            <div
                onClick={ () => setOpen( !open ) } 
                className={`rounded-full p-4 ${ !open ? 'bg-green-700 text-white' : 'border border-green-700 text-green-700' }`} 
            >
                { !open && <FaPlus className='h-6 w-6' /> }
                { open && <FaMinus className='h-6 w-6' /> }
            </div>
        </div>
        {
            open && (
                <div className='text-lg mt-6' >
                    { text }
                </div>
            )
        }
    </div>
  )
}

export default FaQDropdown