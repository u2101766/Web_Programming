import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
            <div class="head"><h1>MM LABELS  GROUP</h1></div>
            <nav>
                <Link className='link' to=''>HOME</Link>
                <Link className='link' to=''>ARTISTS</Link>
                <Link className='link' to=''>BOOK</Link>
                <Link className='link' to=''>EVENTS</Link>
                <Link className='link' to=''>SHOP</Link>
                <Link className='link' to=''>FORUM</Link>
            </nav>
        </header>

  )
}

export default NavBar