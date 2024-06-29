import { FaLocationDot } from 'react-icons/fa6'


const Search = () => {
  return (
    <div className='w-full bg-white rounded-full px-6 py-4 flex gap-2 items-center justify-between' >
        <FaLocationDot className='w-8 h-8 text-lime-500' />
        <input 
            type='text'
            placeholder='Enter Postcode'
            className='w-32'
        ></input>
        <button className='bg-lime-500 rounded-full px-4 py-4' >Find My Branch</button>
    </div>
  )
}

export default Search