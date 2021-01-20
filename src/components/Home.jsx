import React from "react"
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHome, faBullhorn, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import BlogArticle from './BlogArticle'
import ContactForm from './ContactForm'
import Footer from './Footer'
import Logo from '../Logos/Logo.jpeg'
import './css/Home.css'

function Home(){

  const handleSubmit = payload => {
    payload.preventDefault()
    console.log(payload)
  }

  return(
    <div className="home">
      <div className="home__filter"></div>
      <div className="home__inicio">
        <div className="home__inicio--call">
          <h1>¡Vender, comprar o rentar todo a Un Clic de distancia! </h1>
          <button><Link to="/contacto">¡Registrate!</Link></button>
        </div>
      </div>
      <div className="home__presentation">
        <h2>¡Conoce nuestros Servicios en Un Clic!</h2>
        <div className="home__presentation--services">
          <div className="home__presentation--service">
            <Link to="/servicios">
              <FontAwesomeIcon icon={ faCheck } />
              <h2>Avalúos</h2>
            </Link>
            <p>¡No vendas ni compres una propiedad por mas o menos de lo que vale!</p>
            <p>Si estas pensando en comprar o vender una propiedad nosotos te ayudamos a saber si el precio es el indicado, para que tu estes seguro de que estas pagando o vendiendo en el mejor precio del mercado</p>
          </div>
          <div className="home__presentation--service">
            <Link to="/servicios">
              <FontAwesomeIcon icon={ faHome } />
              <h2>Aseoria Inmobiliaria</h2>
            </Link>
            <p>¿Quieres comprar o vender y no sabes que hacer?</p>
            <p>Nosotros te ayuamos a preparar todo para que puedas vender o comprar tu propiedad al mejor precio, en el menor tiempo, tu ya no tendras que preocuparte por nada.</p>
          </div>
          <div className="home__presentation--service">
            <Link to="/servicios">
              <FontAwesomeIcon icon={ faBullhorn } />
              <h2>Publicidad para tu Casa</h2>
            </Link>
            <p>¡Deja de publicarte localmente y empieza a hacerlo en grande!</p>
            <p>Con nosotros tu propiedad llegará a más personas, más rapido, lo que te ayudara a lograr vender en un menor tiempo y a un mejor precio.</p>
          </div>
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
          <div className="home__media--social-facebook">
            <a href='https://www.facebook.com/TuHogarUnClic' target= "_blank" rel="noreferrer">
              <FontAwesomeIcon icon={ faFacebookSquare } />
              <h4>@TuHogarUnClic</h4>
            </a>
          </div>
          <div className="home__media--social-instagram">
            <a href='https://www.instagram.com/tuhogarunclic/?hl=es' target= "_blank" rel="noreferrer">
              <FontAwesomeIcon icon={ faInstagram } />
              <h4>@tuhogarunclic</h4>
            </a>
          </div>
          <div className="home__media--social-youtube" target="_blank">
            <a href='https://www.youtube.com/channel/UCpxOn1TMfuTcvFX6eAiXWVg' rel="noreferrer">
              <FontAwesomeIcon icon={ faYoutube } />
              <h4>Tu Hogar a Un Clic</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="home__blogs">
        <h2>¡Noticias Inmobilirias que podrían interesarte!</h2>
        <BlogArticle />
        <BlogArticle />
        <BlogArticle />
      </div>
      <div className="home__contact">
        <ContactForm handleSubmit={ handleSubmit } /> 
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
      <Footer />
    </div>
    )
}

export default Home