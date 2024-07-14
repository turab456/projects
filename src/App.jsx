import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from "react-router-dom";
import ProductDetails from './Components/ProductDetails'
import Home from './Components/Home'
import Cart from './Components/Cart'

function App() {


  return (
    <>
 {/* <Navbar/> */}
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default App
