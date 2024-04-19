import React from 'react'
import { Link } from 'react-router-dom'

const BookingProfile = ({image, name, rating}) => {
  return (
        <div className='bg-red-300 w-52 p-2'>
            <Link to={`/book/${name}`}>
            <div className='h-52 overflow-hidden flex justify-center items-center'>
                <img className='rounded-md mb-1 object-cover' src={image} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <div>★ {rating}</div>
            </div>
            </Link>
        </div>
  )
}

export default BookingProfile