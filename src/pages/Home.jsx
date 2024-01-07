import React from 'react'
import Header from '../layout/header/Header'
import Products from '../layout/main/Hamburgers'
import Sous from '../layout/main/Sous'
import Lavash from '../layout/main/Lavash'
import { CartProvider } from 'react-use-cart'
import Pizza from '../layout/main/Pizza'
import MoreFastFood from '../layout/main/MoreFastFood'
import Cofe from '../layout/main/Cofe'
import Deserts from '../layout/main/Deserts'
import Footer from '../layout/footer/Footer'
import Navbar from '../layout/header/Navbar'

function Home() {
  return (
    <div className='main'>
       <CartProvider>
        <Navbar/>
        <Header/>
        <Products/>
        <Lavash/>
        <Pizza/>
        <MoreFastFood/>
        <Sous/>
        <Cofe/>
        <Deserts/>
        <Footer/>
      </CartProvider>
        
    </div>
  )
}

export default Home