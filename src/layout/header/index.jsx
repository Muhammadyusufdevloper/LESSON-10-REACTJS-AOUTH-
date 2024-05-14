import React, { useState } from 'react'
import "./Header.scss"
import { Link, NavLink } from 'react-router-dom'
import siteLogo  from "../../assets/images/header/Logo.svg"
import headerSearch  from "../../assets/images/header/search.svg"
import headerWishlist  from "../../assets/images/header/Wishlist.svg"
import headerCart  from "../../assets/images/header/Cart.svg"
import headerMenu  from "../../assets/images/header/menu.svg"
import Search from '../../components/search'

const Header = () => {
    const [menu,setMenu] = useState(false)
  return (
    <>
        <div className='site__top-boxes'>
            <p className='site__text'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        </div>
        <header className='header'>
            <nav className='container header__navbar'>
                <Link to={"/"}>
                    <img src={siteLogo} alt="Header img"/>
                </Link>
                <ul className={`header__list ${menu ? "header__show-list" : ""}`}> 
                    <li className='header__item'>
                        <NavLink className={`header__link`} to={"/"}>Home</NavLink>
                    </li>
                    <li className='header__item'>
                        <a href='#' className={`header__link`}>Contact</a>
                    </li>
                    <li className='header__item'>
                        <a href='#' className={`header__link`}>About</a>
                    </li>
                    <li className='header__item'>
                        <NavLink className={`header__link`} to={"/login"}>Sign in</NavLink>
                    </li>
                    <li className='header__item-form'>
                        <form className='header__form'>
                            <input className='header__input-input' type="search" placeholder='What are you looking for?'/>
                            <button className='header__serch-icon'>
                                <img src={headerSearch} alt="Header search icon" />
                            </button>
                        </form>
                    </li>
                    <li onClick={()=>setMenu(false)} className='header__close'>
                        X
                    </li>
                </ul>
                <div className='header__boxes'>
                    <form className='header__form'>
                        <input className='header__input-input' type="search" placeholder='What are you looking for?'/>
                        <button className='header__serch-icon'>
                            <img src={headerSearch} alt="Header search icon" />
                        </button>
                        <Search/>
                    </form>
                    <div className='header__btns'>
                        <button>
                            <img src={headerWishlist} alt="Header wishlist icon" />
                        </button>
                        <button>
                            <img src={headerCart} alt="Header Cart img" />
                        </button>
                    </div>
                    <button onClick={()=>setMenu(true)} className='header__menu-btn'>
                        <img src={headerMenu} alt="Header menu icon" />
                    </button>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header