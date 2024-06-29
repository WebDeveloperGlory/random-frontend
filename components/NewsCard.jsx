import React from 'react'

const NewsCard = ({ text,image }) => {
  return (
    <div className='' >
        <div className='w-full h-44 rounded-t-2xl bg-lime-400' >
            {/* Image Goes Here */}
        </div>
        <div className='space-y-6 bg-green-700 text-white px-6 py-8 rounded-b-2xl' >
            <p className='font-bold text-lg'>{ text }</p>
            <p className='underline underline-offset-4' >Read</p>
        </div>
    </div>
  )
}

export default NewsCard