import React, { useState } from 'react'
import img from '../assets/images/burger2.png'
import CloseIcon from '../assets/icons/CloseIcon'

function Admin() {
  const [active, setActive] = useState(false)

  const OpenModal = () => {
    setActive(true)
  }

  const CloseModal = () => {
    setActive(false)
  }

  return (
    <div className="admin">
      <div className="container">
       <div className="admin-content">
        <div className="admin-card" >
            <img src={img} className='products-img' alt="fast food" />
            <input type="text" placeholder='mahsulot nomi' className='admin-input' />
            <input type="text" placeholder='description' className='admin-input' />
            <input type="number" placeholder='mahsulot narxi' className='admin-input' />
            <button className="products-backet">Qo'shish</button>
        </div>

        <div className="admin-card" >
            <img src={img} className='products-img' alt="fast food" />
            <h1>burger</h1>
            <span>oddiy</span>
            <span>25 000 so'm</span>
            <div className="admin-items">
              <button className='admin-btn' onClick={OpenModal}>upate</button>
              <button className='admin-btn'>delete</button>
            </div>
        </div>

        <div className={active ? "admin-modal show" : "admin-modal" }>
          <div className="admin-bg"></div>
          <div className="admin-modal_content">
            <button className='backet-modal-close' onClick={CloseModal}>
              <CloseIcon/>
            </button>
            <div className="admin-modal_items">
              <input type="text" placeholder='mahsulot nomi' className='admin-input' />
              <input type="text" placeholder='description' className='admin-input' />
              <input type="text" placeholder='mahsulot narxi' className='admin-input' />
            </div>
          </div>
        </div>
       </div>

      </div>
    </div>
  )
}

export default Admin