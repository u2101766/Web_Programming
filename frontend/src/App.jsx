import './App.css'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import BookingPage from '../Pages/BookingPage'
import BookingDetail from '../Pages/BookingDetail'
import ShopPage from '../Pages/ShopPage'
import PendingRequestPage from '../Pages/PendingRequestPage'


function App() {


  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/artists' element={''} />
        <Route path='/book/' element={<BookingPage/>} />
        <Route path='/book/:id' element={<BookingDetail/>}/>
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/request' element={<PendingRequestPage/>} />
     </Routes>
    </main>  
  )
}

export default App
