import React from 'react'
import ExpertiseCard from './ExpertiseCard'

const ExpertiseSection = () => {
    const expertiseArr = [
        {
            title: 'Personal care',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, deleniti nulla voluptas ipsam labore pariatur similique quas unde quis. Omnis nesciunt eveniet illum doloribus quaerat autem, corporis cupiditate aperiam aliquid!'
        },
        {
            title: 'Specialist care',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, deleniti nulla voluptas ipsam labore pariatur similique quas unde quis. Omnis nesciunt eveniet illum doloribus quaerat autem, corporis cupiditate aperiam aliquid!'
        },
        {
            title: 'Respite care',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, deleniti nulla voluptas ipsam labore pariatur similique quas unde quis. Omnis nesciunt eveniet illum doloribus quaerat autem, corporis cupiditate aperiam aliquid!'
        },
        {
            title: 'Emergency homecare',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, deleniti nulla voluptas ipsam labore pariatur similique quas unde quis. Omnis nesciunt eveniet illum doloribus quaerat autem, corporis cupiditate aperiam aliquid!'
        },
    ]
  return (
    <div className='space-y-6 bg-green-200 px-4 py-8' >
        <h1 className='font-bold text-4xl text-green-700' >Our homecare expertise</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium nihil debitis ea, sit quis quaerat aperiam nostrum veniam minus libero expedita sunt, error odit officia eius repudiandae autem. Autem!</p>
        <button className='text-green-700 border-2 border-green-700 px-6 py-4 rounded-full' >Find my local branch</button>
        <div className='flex flex-col gap-8' >
            {
                expertiseArr.map( ex => (
                    <ExpertiseCard key={ ex.title } title={ ex.title } body={ ex.body } />
                ))
            }
        </div>
    </div>
  )
}

export default ExpertiseSection