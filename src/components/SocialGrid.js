import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialGrid = ({ clase, link, logo, title }) => {
  return(
    <div className={`home__media--social-${clase}`}>
      <a href={link} target= "_blank" rel="noreferrer">
        <FontAwesomeIcon icon={ logo } />
        <h4>{title}</h4>
      </a>
    </div>
  ) 
}

export default SocialGrid 
