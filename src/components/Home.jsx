import React, { useState, useEffect } from "react"
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHome, faBullhorn, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import axios from './axios'
//import BlogArticle from './BlogArticle'
import Propiedad from './Propiedad.js'
import ContactForm from './ContactForm'
import HomeService from './HomeService'
import HomeSocial from './HomeSocial'
import Logo from '../Logos/Logo_png.png'
import './css/Home.css'

function Home({ handleSubmit, client, processing, succeeded }){

  const [ properties, setProperties ] = useState([])

  useEffect(() => {
    const getProperties = async () => {
      const response = await axios({
        method: 'GET',
        url: '/propiedades',
      })

      setProperties(response.data.propiedades)
    }
    
    document.title = 'Tu Hogar A Un Clic | Vender, Comprar o Rentar a un Clic de distancia'
    getProperties()
  }, [setProperties])

  return(
    <div className="home">
      <div className="home__filter"></div>
      <div className="home__inicio">
        <div className="home__inicio--call">
          <h1>¡Vender, comprar o rentar todo a Un Clic de distancia! </h1>
          <button><a href="#contact">¡Contactanos!</a></button>
        </div>
      </div>
      <div className="home__presentation">
        <h2>¡Conoce nuestros Servicios en Un Clic!</h2>
        <div className="home__presentation--services">
          <HomeService 
            icon={faCheck}
            title='Avalúos'
            text='¡No vendas ni compres una propiedad por mas o menos de lo que vale!'
          />
          <HomeService 
            icon={faHome}
            title='Aseoria Inmobiliaria'
            text='¿Quieres comprar, vender o rentar y no sabes como empezar?'
          />
          <HomeService 
            icon={faBullhorn}
            title='Publicidad para tu Casa'
            text='¡Deja de publicarte localmente y empieza a hacerlo en grande!'
          />
        </div>
      </div>
      <div className="home__media">
        <ReactPlayer 
          className="home__media--video"
          url='https://www.facebook.com/TuHogarUnClic/videos/1132969247159307'
          playing= { true }
          volume= {0.3}
          controls= { true }
        />
        <div className="home__media--social">
          <h2>¡Siguenos en nuestras Redes Sociales!</h2>
          <HomeSocial 
            clase='facebook'
            link='https://www.facebook.com/TuHogarUnClic'
            logo={ faFacebookSquare }
            title='@TuHogarUnClic'
          />
          <HomeSocial 
            clase='youtube'
            link='https://www.youtube.com/channel/UCpxOn1TMfuTcvFX6eAiXWVg'
            logo={ faYoutube }
            title='Tu Hogar a Un Clic'
          />
          <HomeSocial 
            clase='instagram'
            link='https://www.instagram.com/tuhogarunclic/?hl=es'
            logo={ faInstagram }
            title='@tuhogarunclic'
          />
        </div>
      </div>
      <div className="home__properties">
        <h2>¡Conoce Nuestras ultimas propiedades!</h2>
        <div className="home__properties--property" >
          { properties.slice(properties.length-3).map((item) => (
            <div className="property" key={item._id}>
              <Propiedad 
                title= { item.title }
                adress= { item.adress }
                price= { item.price }
                cover= { item.images.cover }
                slug= { item.slug }
              />
              {/*
              <BlogArticle 
                title= {item.title} 
                category= {item.category} 
                cover= {item.cover} 
                extract= {item.extract} 
                body= {item.body} 
                slug= { item.slug }
              />
              */}
            </div>
          ))}
        </div>
      </div>
      <div className="home__contact">
        <ContactForm 
          onSubmit= { handleSubmit } 
          client= { client }
          processing= { processing }
          succeeded= { succeeded }
        /> 
        <div className="home__contact--info">
          <h2>¡Contactanos en un Clic!</h2>
          <div className="contact__info">
            <a href="mailto: contacto@tuhogaraunclic.com">
              <FontAwesomeIcon icon={ faEnvelopeOpenText } />
              <span>contacto@tuhogaraunclic.com</span>
            </a>
          </div>
          <div className="contact__info">
            <a href="https://api.whatsapp.com/send?phone=525620543331">
              <FontAwesomeIcon icon={ faWhatsapp } />
              <span>56 2054 3331</span>
            </a>
          </div>
          <div className="contact__logo">
            <Link to="/contacto">
              <img src={Logo} alt="TuHogarUnClic_Logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Home
