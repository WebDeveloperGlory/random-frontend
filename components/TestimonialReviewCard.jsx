import React from 'react'
import { FaStar } from 'react-icons/fa6'

const TestimonialReviewCard = ({ date, text, author, location, affiliation }) => {
  return (
    <div className='space-y-1 px-4 py-4 bg-gray-200 rounded-lg w-72' >
        <div className='flex justify-between items-center' >
            <div className='flex gap-2' >
                <FaStar className='w-6 h-6 text-lime-500' />
                <FaStar className='w-6 h-6 text-lime-500' />
                <FaStar className='w-6 h-6 text-lime-500' />
                <FaStar className='w-6 h-6 text-lime-500' />
                <FaStar className='w-6 h-6 text-lime-500' />
            </div>
            <p>{ date }</p>
        </div>
        <p>{ text }</p>
        <p className='opacity-80' >review of GoodOaks Homecare - { location } by { author } ({ affiliation })</p>
    </div>
  )
}

export default TestimonialReviewCard