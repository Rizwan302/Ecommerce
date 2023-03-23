import React from 'react'
import Search from './Search/Search'
import Cart from '../Cart/Cart'
import { Context } from '../../utils/context'
import './Header.scss'
import {BsSearch} from 'react-icons/bs'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FcLikePlaceholder} from 'react-icons/fc'



function Header() {
  return (
    <header className='main-header'>
      <div className="header-content">
        <ul className="letf">
          <li>Home</li>
          <li>About</li>
          <li>Categorys</li>
        </ul>
      <div className="center">Hello</div>
      <div className="right">
        <BsSearch/>
        <FcLikePlaceholder/>
        <span className="card-icon">
          <HiOutlineShoppingCart/>
        </span>
      </div>
      </div>
    </header>
  )
}

export default Header
