import React, { useEffect } from "react"
import Propiedad from './Propiedad'
import './css/Propiedades.css'

const Propiedades = ({ properties }) => {

  useEffect(() => {
    document.title = 'Las Mejores Propiedades a un Clic'
  })

  return(
    <div className="propiedades">
      <div className="propiedades__portada">
        <div className="propiedades__portada--title">
          <h1>¡La Propiedad que buscas a un Clic de distancia!</h1>
        </div>
      </div>
      <div className="propiedades__contenido">
        { properties.map( property => (
          <div className="propiedades__contenido--propiedad" key={ property._id } >
            <Propiedad 
              title= { property.title }
              adress= { property.adress }
              price= { property.price }
              cover= { property.images.cover }
              slug= { property.slug }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Propiedades
