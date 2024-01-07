import React, { useState } from 'react'
import CloseIcon from '../../assets/icons/CloseIcon'
import TrashIcon from '../../assets/icons/TrashIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import MinusIcon from '../../assets/icons/Minus'
import ShopIcon from '../../assets/icons/ShopIcon'
import UserIcon from '../../assets/icons/UserIcon'
import MenuIcon from '../../assets/icons/MenuIcon'
import logo from '../../assets/images/logo.png'
import notFound from '../../assets/images/notFound.png'
import { Link } from 'react-scroll'

import { useCart } from 'react-use-cart'
import { linksData } from '../../data/linksData'
import User from '../main/User'

function Navbar() {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()

    const [active, setActive] = useState(false)
    const [modal, setModal] = useState(false)

    const menuClose = () => {
        setActive(false);
    }

    const modalOpen = () => {
        setModal(true)
    }

    const modalClose = () => {
        setModal(false)
    }

    const menuOpen = () => {
        setActive(true)
    }

    const [buy, setBuy] = useState(false)

    const BacketBuyRender = () => {
            setBuy(true)
    }

    const BacketBuyClose = () => {
        setBuy(false)
}

  return (

    <div>
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-content">
                        <div className="nav-logo__list">
                            <a href="/" className='nav-logo__list'>
                                <img src={logo} className='nav-logo' alt="Gold Burger" />
                                <h1 className='nav-logo__title'>Gold Burger</h1>
                            </a>
                        </div>
                    <div className={active ? "nav-list active" : "nav-list"}>
                    
                        <button className="nav-menu__close" onClick={menuClose}>
                            <CloseIcon/>
                        </button>
                        <ul className='nav-links'>
                        {
                            linksData.map((item, key) => (
                                <Link key={item.id} className='nav-link' onClick={menuClose} to={item.title} smooth={true} offset={0} duration={600}>{item.title}</Link>
                            ))
                        }
                           
                        </ul>
                    </div>
                    <div className="nav-items">
                        <button className="nav-backet" onClick={modalOpen}>
                            <span className='nav-backet_quantity'>{totalItems === 0 ? '' : totalItems}</span>
                            <ShopIcon/>
                            <h1 className='nav-backet__title'>Savat</h1>
                        </button>
                            <User/>
                        <button className="nav-menu" onClick={menuOpen}>
                            <MenuIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <div className={modal ? "backet show" : "backet" }>
            <div className="backet-scroll">
                        
            <button className='backet-close' onClick={modalClose}>
                <CloseIcon/>
            </button>
            <div className={isEmpty ? "backet-render" : "backet-render active"}>
                <img src={isEmpty ? notFound : ""} className='backet-img' alt="" />
                <h1 className='backet-notfound'>{isEmpty ? "Hech nima topilmadi" : ""}</h1>
            </div>

            {
                items.map((item, index) => {
                    return(
                        <div className='backet-items' key={index}>
                            <span className='backet-products'>{item.quantity}</span>
                            <img src={item.img} className='backet-product_img' />
                            <h1 className='backet-product_name'>{item.title}</h1>
                            <span className='backet-price'>{item.price}</span>
                            <button className='backet-plus' onClick={() => updateItemQuantity(item.id, item.quantity -1)}><MinusIcon/></button>
                            <button className='backet-minus' onClick={() => updateItemQuantity(item.id, item.quantity +1)}><PlusIcon/></button>
                            <button className='backet-remove' onClick={() => removeItem(item.id)}><TrashIcon/></button>
                        </div>
                    )
                })
            }

        </div>
            <button className={isEmpty ? 'backet-button' : 'backet-button active'} onClick={BacketBuyRender}>{isEmpty ? "Savatga qo'shish" : "Sotib olish"}</button>
        </div>
        <div className={buy ? "backet-modal show" : "backet-modal"}>
            <div className="backet-bg"></div>
                <div className="backet-buy_content">
                    <button className='backet-modal-close' onClick={BacketBuyClose}>
                        <CloseIcon  />
                    </button>
                    <h1 className='backet-modal_title'>Manzil</h1>
                    <form className="backet-inputs">
                        <input type="text" placeholder='uy/ofis' className='backet-input' />
                        <input type="text" placeholder='dom' className='backet-input' />
                        <input type="text" placeholder='Kirsh' className='backet-input' />
                        <input type="text" placeholder='Qavat' className='backet-input' />
                        <input type="text" placeholder='izoh' className='backet-input_text' />
                    </form>
                    <button className='backet-modal_submit'>Yuborish</button>
                </div>
            </div>

    </div>


    
  )
}

export default Navbar