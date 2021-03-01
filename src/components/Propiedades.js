import React, { useState, useEffect } from "react"
import Propiedad from './Propiedad'
import axios from './axios'
import './css/Propiedades.css'

function Propiedades(){

  const [propertys, setPropertys] = useState([])

  useEffect(() => {
    const getPropertys = async () => {

      const response = await axios({
        method: 'GET',
        url: '/propiedades',
      })

      setPropertys(response.data.propiedades)

    }
    
    document.title = 'Las Mejores Propiedades a un Clic'
    getPropertys()
  }, [setPropertys])
  return(
    <div className="propiedades">
      <div className="propiedades__portada">
        <div className="propiedades__portada--title">
          <h1>¡La Propiedad que buscas a un Clic de distancia!</h1>
        </div>
      </div>
      <div className="propiedades__contenido">
        { propertys.map( property => (
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
