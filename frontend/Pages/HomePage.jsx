import React from 'react'
import CustomCarousel from '../Components/Carousel'
import data from '../sampleData'
import BookingProfile from '../Components/BookingProfile'
import ShopItem from '../Components/ShopItem'

const HomePage = () => {

  const sampleImage = [
    { id: 'img1', url: 'https://i.ytimg.com/vi/jfMjbVIGzYc/maxresdefault.jpg' },
    { id: 'img2', url: 'https://i.ytimg.com/vi/tMcYSxFYmGI/maxresdefault.jpg' },
    { id: 'img3', url: 'https://i.ytimg.com/vi/nPZWNsFXqs8/maxresdefault.jpg' },
  ];

  const sampleData = data.slice(0,5)
  return (

    <div className='mx-0   xl:mx-[15%]'>
      <CustomCarousel image={sampleImage}/>

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

// Slider
// 1.https://media.juiceonline.com/2023/08/Fg2zP9faEAAzVoj.jpeg
// 2.https://www.billboard.com/wp-content/uploads/2024/04/Taylor-Swift-cr-Beth-Garrabrant-2024-The-Black-Dog-billboard-1548.jpg?w=942&h=623&crop=1
// 3.https://s.yimg.com/ny/api/res/1.2/EQgWiETHNoDbvPDQXZKvEA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/dc9a4e685392f6a7453779a7c0322786 