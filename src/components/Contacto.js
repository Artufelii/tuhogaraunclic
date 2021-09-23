import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import './css/Contacto.css'
import Logo from '../Logos/Logo_png.png'

import ContactForm from './ContactForm'

function Contacto({ handleSubmit, client, processing, succeeded }) {

  useEffect(() => {
    document.title = 'Contactanos en un Clic'
  })

  return(
    <div className="contacto">
      <div className="contacto__portada">
        <div className="contacto__portada--title">
          <h1>¡Contactanos ahora!</h1>
        </div>
      </div>
      <div className="contacto__formulario">
        <ContactForm 
          onSubmit={ handleSubmit } 
          client= { client }
          processing= { processing }
          succeeded= { succeeded }
        /> 
        <div className="contacto__formulario--info">
          <h2>¡Contactanos en un Clic!</h2>
          <div className="contacto__info">
            <a href="mailto: contacto@tuhogaraunclic.com">
              <FontAwesomeIcon icon={ faEnvelopeOpenText } />
              <span>contacto@tuhogaraunclic.com</span>
            </a>
          </div>
          <div className="contacto__info">
            <a href="https://api.whatsapp.com/send?phone=525620543331">
              <FontAwesomeIcon icon={ faWhatsapp } />
              <span>56 2054 3331</span>
            </a>
          </div>
          <div className="contacto__logo">
            <Link to="/">
              <img src={Logo} alt="TuHogarUnClic_Logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
