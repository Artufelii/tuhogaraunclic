import React, { useEffect } from 'react'
import Servicio from '../components/Servicio'
import Layout from '../components/Layout'
import { faCheck, faHome, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import './css/Servicios.css'

const ServicesScreen = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title  = 'Nuestros Mejores Servicios a un Clic'
  })

  return (
    <Layout>
      <div className="servicios">
        <div className="servicios__portada">
          <div className="servicios__portada--title">
            <h1>¡El servicio que necesitas a un Clic de distancia!</h1>
          </div>
        </div>
        <div className="servicios__contenido">

          <div className="servicios__contenido--servicio">
            <Servicio 
              icon = { faCheck } 
              title = 'Avalúos'
              headline = '¡No vendas ni compres una propiedad por mas o menos de lo que vale!'
              description = '¿Quieres comprar o vender una propiedad? no pagues o recivas menos de lo indicado, nosotros te decimos cual es el mejor precio del mercado.'
              precio = 'desde $3500.00 MXN'
            />
          </div>

          <div className="servicios__contenido--servicio">
            <Servicio 
              icon = { faHome }
              title = 'Asesoría Inmobiliaria'
              headline = '¿Quieres comprar o vender y no sabes que hacer?'
              description = 'Nosotros te ayuamos a preparar todo para que puedas vender o comprar tu propiedad al mejor precio, en el menor tiempo, tu ya no tendras que preocuparte por nada.'
              precio = '6% del valor de la propiedad'
            />
          </div>

          <div className="servicios__contenido--servicio">
            <Servicio 
              icon = { faBullhorn }
              title = 'Publicidad para tu casa'
              headline = '¡Deja de publicarte localmente y empieza a hacerlo en grande!'
              description = 'Con nosotros tu propiedad llegará a más personas, más rapido, lo que te ayudara a lograr vender en un menor tiempo y a un mejor precio.'
              precio = '3% del valor de la propiedad'
            />
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default ServicesScreen
