import React, {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faExpand, faCarSide, faRulerCombined } from '@fortawesome/free-solid-svg-icons'

import { getInfo, getLocation } from '../helpers'
import LoadingScreen from './LoadingScreen'
import ContactForm from './ContactForm'
import Map from './Map'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './css/Property.css'

const Property = ({ handleSubmit, client, processing, succeeded, title }) => {
  const [property, setProperty] = useState({})
  const [loading, setLoading] = useState(false)
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  })
  const { slug } = useParams()

  useEffect(() => {

    setLoading(true)

    getInfo('properties', slug)
      .then(response => {
        setProperty(response.data.propiedad)
        document.title = response.data.propiedad.title
        getLocation(response.data.propiedad.adress)
          .then(response => response.json())
          .then(data => {
            setCenter({
              lat: data.results[0].geometry.location.lat,
              lng: data.results[0].geometry.location.lng,
            })
          })
      })
      .then(setLoading(false))

  }, [setLoading, slug, setProperty, setCenter] )

  return(
    <div className="container">
      { loading ? 
          <LoadingScreen /> :
          <div className="property">
          <div className= 'property__cover' style= {{ backgroundImage: `url(${ property && property.images && property.images.cover })` }}>
                <h1>{ property.title }</h1>
                <h1><small>{ property.type } { property.status }</small></h1>
              </div>
            <div className="property__info">
              <div className="property__info--price">
                <div className="property__info--chars">
                  <h2><strong>$ { property.price }.00</strong> MXN</h2>
                  <div>
                    <h4>Terreno: </h4>
                    <p><FontAwesomeIcon icon={ faExpand } /> { property.chars?.land }</p>
                  </div>
                  <div>
                    <h4>Construcción: </h4>
                    <p><FontAwesomeIcon icon={ faRulerCombined } /> { property.chars?.construction }</p>
                  </div>
                  <div>
                    <h4>Recámaras: </h4>
                    <p><FontAwesomeIcon icon={ faBed } /> { property.chars?.bedrooms }</p>
                  </div>
                  <div>
                    <h4>Baños: </h4>
                    <p><FontAwesomeIcon icon={ faBath } /> { property.chars?.restrooms }</p>
                  </div>
                  <div>
                    <h4>Estacionamientos: </h4>
                    <p><FontAwesomeIcon icon={ faCarSide } /> { property.chars?.parking }</p>
                  </div>
                </div>
                <div className="property__info--galery">
                  <Carousel>
                    {property && property.images && Object.values(property.images)
                        .filter(image => 
                          image !== '')
                        .map((image, i) => (
                          <div key={i}>
                            <img src= { image } alt= { property.title } />
                          </div>
                        )
                      )
                    }
                  </Carousel>
                </div>
              </div>
              <div className="property__info--body">
                <div className="title">
                  <h2>Descipcion:</h2>
                  <p>{ property.description }</p>
                  <h2>Dirección:</h2>
                  <p>{ property.adress }</p>
                  <div className="mapa">
                    <Map center={ center }/>
                  </div>
                </div>
                <div className="contact">
                  <ContactForm 
                    onSubmit={ handleSubmit }
                    client= { client }
                    processing= { processing }
                    succeeded= { succeeded }
                    title= { title }
                  />
                </div>
              </div>
            </div>
          </div>
      }
    </div>
    )
}

export default Property
