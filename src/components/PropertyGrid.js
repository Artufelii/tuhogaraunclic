import React from "react"
import { Link } from 'react-router-dom'
import './css/Propiedad.css'

function PropertyGrid({ slug, title, adress, price, cover }){
  return(
    <div className="propiedad">
      <Link to = { `/propiedades/${slug}` }>
        <div className="propiedad__portada">
          <img src={ cover } alt={ title } />
        </div>
      </Link>
      <div className="propiedad__info">
        <div className="propiedad__info--title">
          <h2>{ title }</h2>
        </div>
        <div className="propiedad__info--direccion">
          <p>{ adress }</p>
        </div>
        <div className="propiedad__info--precio">
          <p>$<strong>{ price }.00</strong> MXN</p>
        </div>
        <div className="propiedad__info--button">
          <Link to={`/propiedades/${slug}`}><button>Más Información</button></Link>
        </div>
      </div>
    </div>
    )
}

export default PropertyGrid
