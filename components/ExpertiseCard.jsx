import React from 'react'

const ExpertiseCard = ({ title, body }) => {
  return (
    <div className='w-full px-4 py-6 rounded-xl bg-white space-y-6' >
        <h1 className='font-bold text-xl underline underline-offset-8 text-lime-700' >{ title }</h1>
        <p>{ body }</p>
    </div>
  )
}

export default ExpertiseCard