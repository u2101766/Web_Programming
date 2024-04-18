import React from 'react'
import BookingProfile from '../Components/BookingProfile'

import data from '../sampleData' //for testing only
import { Link } from 'react-router-dom'

const BookingPage = () => {

    const sampleData = data

  return (
    <div className='w-full h-full'>
        <div className='w-full h-1/3 flex'>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-4xl'>Book Our Artist Now</h1>
                    <p>Support our local artist</p>
                </div>   
            </div>
            <div className='w-1/2'>
                <img className='' src="bookingHero.png" alt=""/>
            </div> 
        </div>

        <div className='flex justify-between items-center'>
           <h1 className='text-xl my-10'>Top Artists</h1> 
           <h1 className='text-md text-gray-700'>More artists →</h1>
        </div>
        
        <div className='flex flex-wrap gap-3'>
            {sampleData.map(data => (    
                    <BookingProfile image={'melanie.jpg'} name={data.name} rating={'5.0'} description={data.description}/>                
            ))}
        </div>
    </div>
  )
}

export default BookingPage