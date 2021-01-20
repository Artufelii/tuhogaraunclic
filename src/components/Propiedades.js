import React, {useState} from "react"
import Propiedad from './Propiedad'
import './css/Propiedades.css'

function Propiedades(){
  return(
    <div className="propiedades">
      <div className="propiedades__portada">
        <div className="propiedades__portada--title">
          <h1>¡La Propiedad que buscas a un Clic de distancia!</h1>
        </div>
      </div>
      <div className="propiedades__contenido">
        <div className="propiedades__contenido--propiedad">
          <Propiedad />
        </div>
      </div>
    </div>
    )
}

export default Propiedades
