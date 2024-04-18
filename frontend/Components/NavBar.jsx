import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
     <header className='w-screen h-56 flex flex-col justify-center items-center'>  
            <div className='h-40'>
                <h1 className='text-white text-4xl'>MM LABELS</h1>
            </div>
            <nav className='w-full flex justify-between items-center gap-2'>
                <Link to='/' className='flex-1 nav-bg px-6 py-3 text-white text-xl text-center'>Home</Link>
                <Link to='/artist' className='flex-1 nav-bg px-6 py-3 text-white text-xl text-center'>Artist</Link>
                <Link to='/book' className='flex-1 nav-bg px-6 py-3 text-white text-xl text-center'>Book</Link>
                <Link to='/events' className='flex-1 nav-bg px-6 py-3 text-white text-xl text-center'>Events</Link>
                <Link to='/shop' className='flex-1 nav-bg px-6 py-3 text-white text-xl text-center'>Shop</Link>
                <Link to='/forum' className='flex-1 nav-bg px-6 py-3 text-white text-xl text-center'>Forum</Link>
            </nav>     
     </header>
  )
}

export default NavBar