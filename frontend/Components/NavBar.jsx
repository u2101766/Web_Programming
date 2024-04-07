import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <div><h1>Logo</h1></div>
        <div className='nav-items'>
            <div><Link className='item' to=''>Home</Link></div>
            <div><Link className='item' to=''>Artist</Link></div>
            <div><Link className='item' to=''>News</Link></div>
            <div><Link className='item' to=''>Services</Link></div>
            <div><button className='login-btn'>Login</button></div>
        </div>
    </nav>
  )
}

export default NavBar