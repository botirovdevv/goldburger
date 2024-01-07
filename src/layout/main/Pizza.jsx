import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ProductItem from './ProductItem'
import { pizzaData } from '../../data/pizzaData'

function Pizza() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <section className="products" id='pitsalar'>
      <div className="container">
          <h1 className='products-title' data-aos="flip-down">Pitsa</h1>
        <div className="products-content" data-aos="fade-down">
          {pizzaData.map((item, index) => {
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

export default Pizza