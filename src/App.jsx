 import React, { useState } from 'react'
 import {   Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import Checkout from './Components/Checkout'
import CollectionDetails from './Components/CollectionDetails'
import OrderConformation from './Components/OrderConformation'
import Login from './Components/Login'
import About from './Components/About'
import Details from './Components/Details'
import FilterData from './Pages/FilterData'
 function App() {
   const [order , setOrder] = useState(null)
   return (
     <div> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/details/:id" element={<Details/>}/> 
        <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}/>
        <Route path="/ordercomformation" element={<OrderConformation order={order}  />}/>
        <Route path="/menscollection/:cat" element={<CollectionDetails/>}/>
        <Route path="/filterData" element={<FilterData/>}/>
      </Routes>
      <Footer/>
     </div>
   )
 }
 export default App