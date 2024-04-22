import './App.css'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import BookingPage from '../Pages/BookingPage'
import BookingDetail from '../Pages/BookingDetail'
import ShopPage from '../Pages/ShopPage'
import PendingRequestPage from '../Pages/PendingRequestPage'
import ShopItemDetails from '../Pages/ShopItemDetails'
import ArtistManagement from '../Pages/ArtistManagement'
import LoginPage from '../Pages/LoginPage'
import ArtistPage from '../Pages/ArtistPage'
import ArtistProfilePage from '../Pages/ArtistProfilePage'


function App() {


  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/artist' element={<ArtistPage/>} />
        <Route path='/artistprofile/:id' element={<ArtistProfilePage/>} />
        <Route path='/book/' element={<BookingPage/>} />
        <Route path='/book/:id' element={<BookingDetail/>}/>
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/shop/:id' element={<ShopItemDetails/>} />
        <Route path='/request' element={<PendingRequestPage/>} />
        <Route path='/manage' element={<ArtistManagement/>} />
        <Route path='/login' element={<LoginPage/>} />
     </Routes>
    </main>  
  )
}

export default App
