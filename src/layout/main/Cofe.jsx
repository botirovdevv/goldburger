import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ProductItem from './ProductItem'
import { drinksData } from '../../data/drinksData'

function Cofe() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <section className="products" id='ichimliklar'>
      <div className="container">
          <h1 className='products-title' data-aos="flip-down">Cofe</h1>
        <div className="products-content" data-aos="fade-down">
          {drinksData.map((item, index) => {
            return(
              <ProductItem
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}  
              />
            )
        })}
        </div>
      </div>
    </section>
  )
}

export default Cofe