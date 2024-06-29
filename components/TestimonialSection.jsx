import React from 'react'
import TestimonialReviewCard from './TestimonialReviewCard'

const TestimonialSection = () => {
    const testimonials = [
        {
            date: '20 June 2024', 
            text: 'The team from GoodOaks are amazing have become an integral part of Mum\'s care. She loves the trips...', 
            author: 'Emma P', 
            location: 'Sussex South', 
            affiliation: 'Daughter of Client'
        },
        {
            date: '20 June 2024', 
            text: 'The team from GoodOaks are amazing have become an integral part of Mum\'s care. She loves the trips...', 
            author: 'Emma P', 
            location: 'Sussex South', 
            affiliation: 'Daughter of Client'
        },
        {
            date: '20 June 2024', 
            text: 'The team from GoodOaks are amazing have become an integral part of Mum\'s care. She loves the trips...', 
            author: 'Emma P', 
            location: 'Sussex South', 
            affiliation: 'Daughter of Client'
        },
        {
            date: '', 
            text: '', 
            author: '', 
            location: '', 
            affiliation: ''
        },
    ]
  return (
    <div className='px-4 space-y-6' >
        <h1 className='text-3xl font-bold text-green-700' >What Our Clients Say</h1>
        <div className='flex items-center justify-center gap-2 px-6' >
            <div className='border border-green-700 rounded-full p-1'>
                <div className='font-bold bg-green-700 rounded-full p-4 text-white text-xl' >
                    <p>9.4</p>
                </div>
            </div>
            <div className='px-1'>
                <p className='font-bold' >homecare.co.uk Review Score for GoodOaks Homecare</p>
                <p>215 reviews of the settings belonging to GoodOaks Homecare</p>
            </div>
        </div>
        <div className='flex gap-2 overflow-x-scroll' >
            { testimonials.map( test => <TestimonialReviewCard key={ test.author } date={ test.date } text={ test.text } author={ test.author } location={ test.location } affiliation={ test.affiliation } />)}
        </div>
        <div className='text-center text-blue-700' >
            <p><span>Write A Review</span> | <span>Read All 215 Reviews</span></p>
        </div>
    </div>
  )
}

export default TestimonialSection