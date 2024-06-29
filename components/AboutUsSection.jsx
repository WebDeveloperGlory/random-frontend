import React from 'react'
import AboutUsCard from './AboutUsCard'

const AboutUsSection = () => {
    const aboutUs = [
        {
            title: 'Visiting Homecare', 
            points: [
                'From 30mins a week to round-the-clock support',
                'Only pay for what you need',
                'Homecare visits at a time that suits you',
                'Stay at home with a personalized care plan'
            ], 
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ad veritatis enim, harum excepturi, delectus, ex possimus eius nostrum consequatur illo vitae quibusdam autem! Sit aliquid aut omnis perferendis saepe?', 
            styles: 'bg-lime-500'
        },
        {
            title: 'Live-in Care', 
            points: [
                'In your own home',
                'Healthy home cooked meals',
                'Round-the-clock companionship and care',
                'Personalized, managed and regulated service'
            ], 
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium omnis, sit accusamus, quibusdam, cum quo est nulla in ut officiis magni. Quos perspiciatis totam maiores quaerat voluptatum quis esse?', 
            styles: 'bg-blue-400'
        },
    ]
  return (
    <div className='px-4 flex flex-col gap-6' >
        { aboutUs.map( point => <AboutUsCard key={ point.title } title={ point.title } points={ point.points } text={ point.text } styles={ point.styles } />)}
    </div>
  )
}

export default AboutUsSection