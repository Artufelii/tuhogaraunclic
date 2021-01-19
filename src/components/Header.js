import React from "react"
import { Link } from 'react-router-dom'
import './css/Header.css'
import Logo from '../Logos/Logo.jpeg'

function Header(){
  return(
    <div className='header'>
      <nav className="header__navigation">
        <Link to="/">
          <div className="header__navigation--logo">
            <img src={Logo} alt="TuHogar_Logo" />
          </div>
        </Link>
        <ul className="header__navigation--list">
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/propiedades">Propiedades</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </div>
    )
}

export default Header
