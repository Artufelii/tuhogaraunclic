import React, {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'

import axios from './axios'
import LoadingScreen from './LoadingScreen'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './css/Property.css'

function Property(){
  const [property, setProperty] = useState({})
  const [loading, setLoading] = useState(false)
  const { slug } = useParams()

  useEffect(() => {
    setLoading(true)
    const getProperty = async () => {
      const response = await axios({
        method: 'GET',
        url: `/propiedades/${slug}`,
      })
      setProperty(response.data.propiedad)
      document.title = response.data.propiedad.title
      setLoading(false)
    }
    getProperty()
  }, [setLoading, slug, setProperty] )

  return(
    <div className="container">
      { loading ? 
          <LoadingScreen /> :
          <div className="property">
          <div className= 'property__cover' style= {{ backgroundImage: `url(${ property && property.images && property.images.cover })` }}>
                <h1>{ property.title }</h1>
              </div>
            <div className="property__info">
              <div className="property__info--price">
                <h2>Precio: <strong>$ { property.price }.00</strong> MXN</h2>
              </div>
              <div className="property__info--galery">
                <Carousel>
                  {property && property.images && Object.values(property.images).map((image, i) => (
                    <div key={i}>
                      <img src= { image } alt= { property.title } />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="property__info--body">
                <h2>Descipcion:</h2>
                { property.description }
              </div>
              <div className="property__info--category">
                <h2>Dirección:</h2>
                { property.adress }
              </div>
            </div>
          </div>
      }
    </div>
    )
}

export default Property
