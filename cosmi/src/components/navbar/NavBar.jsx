import React from 'react'
import './NavBar.css'
import Logo from '../../../public/logo.png'
import Logo_02 from '../../../public/logo-2.png'


function NavBar() {
  return (
    <div>
      <div className="nav_bar">
      <div className="primary_nav">

        <div className="logo">
          <img className='logo' src={Logo} alt="logo" />
        </div>
          <ul>
            <li>
              <a href="#home">Moonish</a>
            </li>
            <li>
              <a href="#about">Hot Drop</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Collection</a>
            </li>
          </ul>
        </div>
        <div className="secondary_nav">
              <a href="logo-2">
                <img className='logo_02' src={Logo_02} alt="logo" />
              </a>
            <ul className='third_nav'>

              <li><a href="#shop">02 shop</a></li>
              <li><a href="#shop">new collection</a></li>
              <li><a href="#shop">Earth</a></li>


            </ul>
        </div>
      </div>
     </div>
  )
}

export default NavBar