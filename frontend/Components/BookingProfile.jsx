import React from 'react'
import { Link } from 'react-router-dom'

const BookingProfile = ({image, name}) => {
  return (
        <div className='bg-[#222222] w-52 p-2'>
            <h1 className='text-center'>{name}</h1>
            <Link to={`/book/${name}`}>
            <div className='h-52 overflow-hidden rounded-md flex justify-center items-center'>      
                <img className=' mb-1 ' src={image} alt="" />
            </div>
            <div className='flex justify-center my-2'>
                <button className=''>Book</button>
            </div>
            </Link>
        </div>
  )
}

export default BookingProfile