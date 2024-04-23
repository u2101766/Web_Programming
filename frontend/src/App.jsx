import './App.css'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import BookingPage from '../Pages/BookingPage'
import BookingDetail from '../Pages/BookingDetail'
import ShopPage from '../Pages/ShopPage'
import PendingRequestPage from '../Pages/PendingRequestPage'
import ProductDetailPage from '../Pages/ProductDetailPage'
import ArtistManagement from '../Pages/ArtistManagement'
import LoginPage from '../Pages/LoginPage'
import ArtistPage from '../Pages/ArtistPage'
import ArtistProfilePage from '../Pages/ArtistProfilePage'
import EventPage from '../Pages/EventPage'
import PaymentPage from '../Pages/PaymentPage'
import ShoppingCartPage from '../Pages/ShoppingCartPage'


function App() {


  return (
    <main className='flex-1 min-h-[79vh]'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/artist' element={<ArtistPage/>} />
        <Route path='/artistprofile/:id' element={<ArtistProfilePage/>} />
        <Route path='/book/' element={<BookingPage/>} />
        <Route path='/book/:id' element={<BookingDetail/>}/>
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/event' element={<EventPage/>} />
        <Route path='/shop/:id' element={<ProductDetailPage/>} />
        <Route path='/request' element={<PendingRequestPage/>} />
        <Route path='/manage' element={<ArtistManagement/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/cart' element={<ShoppingCartPage/>} />
     </Routes>
    </main>  
  )
}

export default App
