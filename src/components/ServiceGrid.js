import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const ServiceGrid = ({ icon, title, text }) => {
  return(
    <div className="home__presentation--service">
      <Link to="/servicios">
        <FontAwesomeIcon icon={ icon } />
        <h2>{title}</h2>
      </Link>
      <p>{text}</p>
      <Link to="/servicios">Más...</Link>
    </div>
  ) 
}

export default HomeService
