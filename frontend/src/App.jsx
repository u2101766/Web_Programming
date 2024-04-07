import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import BookingPage from '../Pages/BookingPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<BookingPage/>} />
      </Routes>
    </>
  )
}

export default App
