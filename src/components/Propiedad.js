import React from "react"
import './css/Propiedad.css'

function Propiedad(){
  return(
    <div className="propiedad">
      <div className="propiedad__portada">
        <img src='https://res.cloudinary.com/fragmods/image/upload/v1611167551/Logos/architecture-1836070_1920_am827l.jpg' alt="Casa_Muestra" />
      </div>
      <div className="propiedad__info">
        <div className="propiedad__info--title">
          <h2>Titulo de la casa</h2>
        </div>
        <div className="propiedad__info--direccion">
          <p>Dirección genérica</p>
        </div>
        <div className="propiedad__info--precio">
          <p>$<strong>Precio.00</strong> MXN</p>
        </div>
      </div>
    </div>
    )
}

export default Propiedad
