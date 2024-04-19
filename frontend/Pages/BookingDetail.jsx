import React from 'react'
import { Link, useParams } from 'react-router-dom'

import data from '../sampleData'

const BookingDetail = () => {
    const {id} = useParams()

    const sampleData = data.filter(data => data.name === id);
    console.log(sampleData)

  return (
    <div className='pt-16'>
        <Link to={'/book'}>
            <img width={'40px'} src="../backBtn.png" alt="" />
        </Link>
        <div className='flex justify-center gap-20 mt-4'> 
            <div className='max-w-80 min-w-40 max-h-80 '>
                <img className='rounded-md' width='100%' src={sampleData[0].image} alt="" />
                <p className='text-white text-md my-10'><strong>Description: </strong>
                    {sampleData[0].description}
                </p>
            </div>
        <div>
            <h1 className='text-white text-5xl mb-4'>{id}</h1>
            <div className='text-white poppins'>Career: {sampleData[0].career}</div>
            <div className='text-white poppins flex gap-3'>Genre: {sampleData[0].genre.map(genre => (<div>{genre}</div>))}</div>
            <div className='text-white poppins'>Birthday: {sampleData[0].birthday}</div>
            <div className='text-white poppins'>Music: {}</div>
            <form className='mt-12 flex flex-col gap-3' action="">
                <h1 className='flex-1 text-white text-2xl'>Send Booking Request</h1>
                <input className='rounded-md p-1 focus:outline-none poppins' placeholder='First name' type="text" />
                <input className='rounded-md p-1 focus:outline-none poppins' placeholder='Last name' type="text" />
                <input className='rounded-md p-1 focus:outline-none poppins' type="date" />
                <label className='text-white text-xl mt-4' htmlFor="">Service available:</label>
                <div className='flex gap-4 mb-4'>
                    <div className='flex justify-center items-center gap-2'>
                        <input className='w-5 h-5' type="checkbox" />
                        <label className='text-white text-xl' htmlFor="">Event</label>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <input className='w-5 h-5' type="checkbox" />
                        <label className='text-white text-xl' htmlFor="">Collaboration</label>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <input className='w-5 h-5' type="checkbox" />
                        <label className='text-white text-xl' htmlFor="">Ambassador</label>
                    </div>  
                </div>
                <input className='rounded-md p-1 focus:outline-none poppins' type="email" placeholder='Email' />
                <input className='rounded-md p-1 focus:outline-none poppins' type="number" placeholder='Mobile number' />
                <textarea placeholder='Request detail' className='rounded-md p-1 focus:outline-none poppins' name="" id="" cols="30" rows="10"></textarea>
                <input className='text-white bg-blue-600 rounded-md py-3' type="submit" value='Submit' />
            </form>
        </div>
    </div>
    </div>
    
  )
}

export default BookingDetail