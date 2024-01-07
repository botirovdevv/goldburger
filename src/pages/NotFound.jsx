import React from 'react'
import img from '../assets/images/notFound.jpg'

function NotFound() {
  return (
    <section className="error">
      <div className="container">
        <div className="error-content">
          <img src={img} className='error-image' alt="404 Not Found" />
          <div className="error-items">
            <h1 className='error-title'>Bu sahifada hech nima topilmadi!</h1>
            <a href="/" className='error-link'>Asosiy sahifa</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound