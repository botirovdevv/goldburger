import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { swiperData } from '../../data/swiperData';

import 'swiper/css/effect-coverflow'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductItem from './ProductItem';

import AOS from 'aos'
import 'aos/dist/aos.css'

function MoreFastFood() {
    function Lavash(props) {
        useEffect(() => {
            AOS.init({duration: 2000})
        }, [])
    }
  return (
    <section className='swiper'>
        <div className="container">
                <h1 className='swiper-title' data-aos="zoom-out">Ko'proq</h1>
            <div className="swiper-content">
            <Swiper
                slidesPerView={3}
                spaceBetween={100}
                style={{
                    "--swiper-pagination-color": "#FFD700",
                    "--swiper-pagination-bullet-size": "10px",
                }}
                breakpoints={
                {
                    280: {
                    slidesPerView: 1,
                    spaceBetween: 70,
                    },

                    550: {
                    slidesPerView: 2,
                    spaceBetween: 50
                    },

                    910: {
                    slidesPerView: 3,   
                    spaceBetween: 70
                    },

                    1200: {
                    slidesPerView: 3,
                    spaceBetween: 90
                    }
                }
                }
                loop={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination, EffectCoverflow]}
                className="mySwiper"
            >
                {
                swiperData.map((item, index) => {
                    
                    return(
                    <SwiperSlide className='swiper-slide' key={index}>
                        <ProductItem
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            key={index}  
                        />
                    </SwiperSlide>
                )
            })}
            </Swiper>

            </div>
        </div>
    </section>
  )
}

export default MoreFastFood