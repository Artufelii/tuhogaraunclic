import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faBell, faUser } from '@fortawesome/free-solid-svg-icons'

import './css/DashboardHeader.css' 

const  DashboardHeader = () => {
  return(
    <div className="dashboardHeader" >
      <div className="dashboardHeader__brand">
        <button><FontAwesomeIcon icon={faBars}/></button>
        <div className="dashboardHeader__brand--title">Tu Hogar a Un Clic</div>
      </div>
      <div className="dashboardHeader__search">
        <input type="text" name='filter' id="filter" placeholder="Search"/>
        <button><FontAwesomeIcon  icon={faSearch}/></button>
      </div>
      <div className="dashboardHeader__settings">
        <FontAwesomeIcon icon={faBell}/>
        <FontAwesomeIcon icon={faUser}/>
      </div>
    </div>
    )
}

export default DashboardHeader
