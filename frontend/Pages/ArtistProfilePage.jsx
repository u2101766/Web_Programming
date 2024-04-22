import React from 'react'
import { useParams } from 'react-router-dom'

const ArtistProfilePage = () => {
    const {id} = useParams()
  return (
    <div className='px-[12%] flex flex-col justify-center items-center'>
        <h1 className='text-center text-4xl josefin'>{id}</h1>
        
        <div className='max-w-96 max-h-96 overflow-hidden rounded-md'>      
                <img className='w-full h-full object-cover rounded-md' src="https://assets.bharian.com.my/images/articles/18sono1.transformed.jpg" alt="" />
        </div>

        <p className='text-center my-4 josefin'><strong>About</strong><br/>
                I am a Malaysian singer, songwriter and male <br/>
                actor. I was a champion in a competition on <br/>
                YouTube and the son of a veteran singer of <br/>
                the 1980s, Suliza Salam.
            </p>

            <p className='text-center josefin'>
                Career: Malaysian Singer<br/>
                Genre: Pop and R&B<br/>
                Birthday: April 13th, 2000 (24 years old)<br/>
                Music: Sabar, Demi Kita, Bidadari and more.
            </p>

            <br/><br/><br/>

            <h1 className='josefin text-2xl'>GALLERY</h1>

            <div className='flex justify-center flex-wrap gap-8 my-4'>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
                <img src="../shopTest.png" alt=""/>
            </div>
        
    </div>
  )
}

export default ArtistProfilePage