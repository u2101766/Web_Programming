import React from 'react'
import { Link } from 'react-router-dom'

const ArtistProfile = ({name,career,genre,birthday,music}) => {
  return (
   
        <div class="flex flex-col md:flex-row bg-[#222222] overflow-hidden rounded-md">
            <div className='w-96 h-96  overflow-hidden'>
                <img className='' src="https://assets.bharian.com.my/images/articles/18sono1.transformed.jpg" alt="Ismail Izzani" />
            </div>
          
            <div class="artist-info px-16 py-8">
                <h2 className='text-3xl md:text-6xl josefin'>{name}</h2>
                <p className='josefin text-md md:text-xl'>
                Career: {career}<br />
                Genre: {genre}<br />
                Birthday: {birthday}<br/>
                Music: {music}
                </p>
                <Link to={`/artistprofile/${name}`}>
                    <button className='mt-2 px-6 py-3 red rounded-md'>VIEW</button>
                </Link>
            </div>
        </div>
   
  )
}

export default ArtistProfile