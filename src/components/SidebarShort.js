import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faHome, faDesktop, faUserTie, faUsers, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { AdminContext } from '../AdminContext'
import logo from '../Logos/Logo_png.webp'
import './css/SidebarShort.css'

const SidebarShort = () => {
  const history = useHistory()
  const { usuario } = useContext(AdminContext)

  const logout = () => {
    sessionStorage.removeItem('token')
    history.push('/admin/login')
  }
  
  return(
    <div className="sidebar_short">
      <div className="logo_short">
        <img style={{maxWidth: '100%', maxHeight:'100%', borderRadius: '50%'}} src={logo} alt="Tu Hogar a Un Clic" />
      </div>
      <div className="user">
        <span className="profile">
          {usuario 
            ? <img src={usuario.profile_img} alt={usuario.username} />
            : <FontAwesomeIcon icon={ faUserCircle } />
          }
        </span>
      </div>
      <div className="options_short">
        <FontAwesomeIcon icon={faDesktop}/>
        <FontAwesomeIcon icon={faHome}/>
        <FontAwesomeIcon icon={faUsers}/>
        <FontAwesomeIcon icon={faUserTie}/>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logout}/>
      </div>
    </div>
  ) 
}

export default SidebarShort
