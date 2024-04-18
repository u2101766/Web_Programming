import React from 'react'
import { Link } from 'react-router-dom'

const BookingProfile = ({image, name, rating, description}) => {
  return (
        <div className='bg-slate-300 w-52 p-2'>
            <Link to={`/book/${name}`}>
            <div>
                <img className='rounded-md mb-1' src={image} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <div>★ {rating}</div>
                <p className='w-full line-clamp-4'><strong>Description:</strong>{description}</p>
            </div>
            </Link>
        </div>
  )
}

export default BookingProfile