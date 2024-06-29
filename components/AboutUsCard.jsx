import React from 'react'

const AboutUsCard = ({ title, points, text, styles }) => {
  return (
    <div className={`rounded-2xl pb-8 ${ styles } text-white border border-black space-y-8`} >
        <div className='w-full h-60 bg-white rounded-t-2xl' ></div>
        <div className='px-4 space-y-8' >
            <h1 className='font-bold text-xl' >{ title }</h1>
            <ul className='text-xl space-y-2' >
                {
                    points.map( point => (
                        <div key={ point } className='flex gap-4 items-center' >
                            <div className='w-5 h-4 rounded-full bg-white' ></div>
                            <li 
                                className=''
                            >
                                { point }
                            </li>
                        </div>
                    ) )
                }
            </ul>
            <p>{ text }</p>
        </div>
    </div>
  )
}

export default AboutUsCard