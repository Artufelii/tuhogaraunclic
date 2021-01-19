import React from "react"
import { Link } from 'react-router-dom'
import './css/Footer.css'

function Footer(){
  return(
    <div className='footer'>
      <nav className="footer__navigation">
        <ul className="footer__navigation--list">
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/propiedades">Propiedades</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        <p>@Copy Rights Tu Hogar a Un Clic 2020</p>
      </nav>
    </div>
    )
}

export default Footer 
