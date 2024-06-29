import React from 'react'
import NewsCard from './NewsCard'

const NewsSection = () => {
    const news = [
        { 
            text: 'GoodOaks Homecare - Brentford pledge to support local ms therapy center',
            image: ''
        },
        { 
            text: 'New GoodOaks Homecare branch opens its doors in West Sussex',
            image: ''
        },
        { 
            text: 'What career support is available to me in the Brentford area',
            image: ''
        },
    ]
  return (
    <div className='px-4' >
        <h1 className='font-bold text-3xl text-green-700' >News From GoodOaks Homecare</h1>
        <div className='flex flex-col gap-6 my-10'>
            {
                news.map( article => <NewsCard key={ article.text } text={ article.text } image={ article.image } />)
            }
        </div>
    </div>
  )
}

export default NewsSection