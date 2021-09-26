import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './css/Servicio.css'

function Servicio({ icon, title, headline, description, precio }) {
  return (
    <div className="servicio">
      <div className="servicio__portada">
        <FontAwesomeIcon icon={ icon } />
      </div>

      <div className="servicio__info">
        <div className="servicio__info--title">
          <h2>{ title }</h2>
        </div>
        <div className="servicio__info--description">
          <p>{ headline }</p>
          <p>{ description }</p>
        </div>
        <div className="servicio__info--price">
          <h3>Costo:</h3>
          <p><strong>{ precio }</strong></p>
        </div>
      </div>

      <div className="servicio__call">
        <h3>¡Contacta un asesor en un clic!</h3>
        <Link to="/contacto"><button>¡Contactanos!</button></Link>
      </div>

    </div>
  )
}

export default Servicio
