import React, { useEffect } from "react"
import PropertyGrid from '../components/PropertyGrid'
import Layout from '../components/Layout'
import './css/Propiedades.css'

const PropertysScreen = ({ properties }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Las Mejores Propiedades a un Clic'
  })

  return(
    <Layout>
      <div className="propiedades">
        <div className="propiedades__portada">
          <div className="propiedades__portada--title">
            <h1>¡La Propiedad que buscas a un Clic de distancia!</h1>
          </div>
        </div>
        <div className="propiedades__contenido">
          { properties.map( property => (
            <div className="propiedades__contenido--propiedad" key={ property._id } >
              <PropertyGrid
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
    </Layout>
  )
}

export default PropertysScreen 
