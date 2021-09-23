import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './css/Header.css'
import Logo from '../Logos/Logo.jpeg'

const Header = () => {

  const [top, setTop] = useState(false)
  const [width, setWidth] = useState(0)

  const showNav = () => {
    if (top) {
      setTop(false)

      return
    }

    setTop(true)
  }

  useEffect(() => {

    const updateWidth = () => {
      const width = document.body.clientWidth
      setWidth(width)
    }

    window.addEventListener('resize', updateWidth)
  }, [setWidth])

  return(
    <>
      <div className='header'>
        <nav className="header__navigation">
          <Link to="/">
            <div className="header__navigation--logo">
              <img src={Logo} alt="TuHogar_Logo" />
            </div>
          </Link>
          <ul className="header__navigation--list">
            <li><Link to="/propiedades">Propiedades</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <div className="burger" onClick={() => showNav() }>
              <FontAwesomeIcon icon={ faBars }/>
            </div>
          </ul>
        </nav>
      </div>
      <div className="responsive__nav" style={{top: `${top && width <= 400 ? '67px' : top && width <= 800 ? '110px' : '-500px'}`} }>
        <ul>
          <li onClick={() => setTop(false)}><Link to="/propiedades">Propiedades</Link></li>
          <li onClick={() => setTop(false)}><Link to="/servicios">Servicios</Link></li>
          <li onClick={() => setTop(false)}><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
