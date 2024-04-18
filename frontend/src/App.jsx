import './App.css'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import BookingPage from '../Pages/BookingPage'
import BookingDetail from '../Pages/BookingDetail'


function App() {


  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/artists' element={''} />
        <Route path='/book' element={<BookingPage/>} />
        <Route path='/book/:id' element={<BookingDetail/>}/>
        <Route path='/' element={<HomePage/>} />
        <Route path='/' element={<HomePage/>} />
     </Routes>
    </main>  
  )
}

export default App
