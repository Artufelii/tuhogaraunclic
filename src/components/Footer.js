import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './css/Footer.css'

function Footer(){
  return(
    <div className='footer'>
      <nav className="footer__navigation">
        <ul className="footer__navigation--list">
          <li><a href='https://www.facebook.com/TuHogarUnClic'><FontAwesomeIcon icon={ faFacebookSquare } /></a></li>
          <li><a href='https://www.instagram.com/tuhogarunclic/?hl=es'><FontAwesomeIcon icon={ faInstagram } /></a></li>
          <li><a href='https://www.youtube.com/channel/UCpxOn1TMfuTcvFX6eAiXWVg'><FontAwesomeIcon icon={ faYoutube } /></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=525620543331"><FontAwesomeIcon icon={ faWhatsapp } /></a></li>
        </ul>
      </nav>
    </div>
    )
}

export default Footer 
