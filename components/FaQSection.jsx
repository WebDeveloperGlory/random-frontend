import React from 'react'
import FaQDropdown from './FaQDropdown'

const FaQSection = () => {
    const faq = [
        {
            title: 'What is homecare',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis nihil cupiditate placeat exercitationem obcaecati corrupti vel! Quis culpa, reprehenderit recusandae expedita magni perspiciatis provident laborum adipisci nulla atque. Laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum laborum exercitationem aspernatur ipsam eveniet amet soluta, fugit, necessitatibus sequi illo nulla mollitia praesentium quos, officiis alias expedita natus non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur libero autem provident cum exercitationem ducimus eveniet doloribus voluptate eius nisi tempore enim, vero sapiente quod quam id, excepturi neque?'
        },
        {
            title: 'Can you get 24 hour care at home',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi amet adipisci labore quam aliquam id, beatae asperiores voluptatibus corrupti! Doloribus, recusandae! Magni, sequi unde! Aliquam debitis harum explicabo eveniet ullam!'
        },
        {
            title: 'How much does in-home care cost',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, at sunt rem magnam fugiat quas eius veritatis, illum, aliquam voluptatem harum illo vitae quos nam incidunt quidem dolores molestiae. Repellendus.'
        },
        {
            title: 'How to get in-home care',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit magni neque pariatur nisi, iste ipsum eveniet assumenda eius? Repellat quo quasi aliquid, nemo beatae ipsum consectetur ipsa aspernatur optio sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque doloremque esse provident natus impedit voluptas, veniam consectetur animi accusamus dicta praesentium eveniet qui asperiores quos, aspernatur autem, dolorem eos?'
        },
    ]
  return (
    <div className='px-4 bg-lime-100 py-8' >
        <h1 className='font-bold text-3xl text-green-700' >Find Out More About Homecare</h1>
        <div className='flex flex-col gap-6 mt-8' >
            { 
                faq.map( question => <FaQDropdown key={ question.title } title={ question.title } text={ question.text } /> )
            }
        </div>
    </div>
  )
}

export default FaQSection