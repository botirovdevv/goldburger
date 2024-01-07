import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import video from '../assets/videos/goldburgervideo.mp4'
import 'react-html5video/dist/styles.css'
import Investment from '../assets/icons/InvestmentIcon'
import Group from '../assets/icons/GroupIcon'
import Clients from '../assets/icons/ClientsIcon'
import Form from './Form'

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h1 className='about-title'>Biz haqimizda</h1>
          <Video
            autoPlay
            loop
            muted
          >
          <source src={video} type='video/webm'/>  
          </Video>

          <div className="about-info">
            <div className="about-info__card">
              <span className="about-icon">
                <Investment/>
              </span>
              <div className="about-items">
                <h1 className='about-info__title'>3</h1>
                <p className='about-info__subtitle'>Yillik tajriba</p>
              </div>
            </div>

            <div className="about-info__card">
              <span className="about-icon">
                <Group/>
              </span>
              <div className="about-items">
                <h1 className='about-info__title'>25 +</h1>
                <p className='about-info__subtitle'>Xodimlar</p>
              </div>
            </div>

            <div className="about-info__card">
              <span className="about-icon">
                <Clients/>
              </span>
              <div className="about-items">
                <h1 className='about-info__title'>25 000 +</h1>
                <p className='about-info__subtitle'>Mijozlar</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Form/>
    </section>
  )
}

export default About