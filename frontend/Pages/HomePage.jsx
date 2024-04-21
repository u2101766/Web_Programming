import React from 'react'
import CustomCarousel from '../Components/Carousel'
import data from '../sampleData'
import BookingProfile from '../Components/BookingProfile'
import ShopItem from '../Components/ShopItem'

const HomePage = () => {

  const sampleData = data.slice(0,5)
  return (

    <div>
      <CustomCarousel/>

      <h1 className='text-center text-2xl my-8'>Top Artists</h1>

      <div className='flex justify-center flex-wrap gap-5'>
        {sampleData.map(artist => (
          <BookingProfile name={artist.name} image={artist.image}/>
        ))}
      </div>

      <h1 className='text-center text-2xl my-8'>Shop Our Latest Merchandise</h1>

      <div className='flex justify-center flex-wrap gap-5'>
        <ShopItem ratingStar={5} price={'RM 200'}/>
        <ShopItem ratingStar={5} price={'RM 350'}/>
        <ShopItem ratingStar={4} price={'RM 150'}/>
        <ShopItem ratingStar={4} price={'RM 120'}/>
      </div>
    </div>
    

    
  )
}

export default HomePage