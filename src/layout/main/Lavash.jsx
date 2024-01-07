import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ProductItem from './ProductItem'
import { lavashData } from '../../data/lavashData'

function Lavash() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  
  return (
    <section className="products" id='lavashlar'>
      <div className="container">
          <h1 className='products-title' data-aos="flip-down">Lavash</h1>
        <div className="products-content" data-aos="fade-down">
          {lavashData.map((item, index) => {
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

export default Lavash