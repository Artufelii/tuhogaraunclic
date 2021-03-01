import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import SidebarElement from './SidebarElement'
import Logo from '../Logos/Logo_png.png'
import './css/Sidebar.css'


const Sidebar = ({ admin }) => {

  const [ sideBarMenuPagina, setSideBarMenuPagina ] = useState(false)
  const [ sideBarMenuPropiedad, setSideBarMenuPropiedad ] = useState(false)
  const [ sideBarMenuBlog, setSideBarMenuBlog ] = useState(false)
  const [ sideBarMenuServicio, setSideBarMenuServicio ] = useState(false)
  const [ sideBarMenuContacto, setSideBarMenuContacto ] = useState(false)

  const desplegarMenu = (state, setState) => {
    if (state) {
      setState(false)
    } else {
      setState(true)
    }
  }

  return(
    <div className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__brand--logo">
          <img src={Logo} alt="TuHogarAUnClic_Logo" />
        </div>
      </div>
      <div className="sidebar__info">
        <div className="sidebar__profile">
          <div className="sidebar__profile--img">
            { admin ? <img src={admin.profile_img} alt={admin.username} /> : <FontAwesomeIcon icon={faUserCircle} />}
          </div>
          <div className="sidebar__profile--user">
            { admin ? admin.username : 'User' }
          </div>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <ul>
          <Link to='/dashboard/desk'><li className="sidebar__dashboard">Dashboard</li></Link>
          <SidebarElement 
            title='Paginas'
            state= {sideBarMenuPagina}
            setState={ setSideBarMenuPagina }
            desplegarMenu={ desplegarMenu }
            submenu={['Nueva pagina', 'Propiedades', 'Login', 'Home', 'Blogs', 'Servicios', 'Contacto']} 
          />
          <SidebarElement 
            title='Propiedades'
            state= {sideBarMenuPropiedad}
            setState={ setSideBarMenuPropiedad }
            desplegarMenu={ desplegarMenu }
            submenu={['Nueva Propiedad', 'Todas', 'En oferta', 'Antigüas']} 
          />
          <SidebarElement 
            title='Blog'
            state= {sideBarMenuBlog}
            setState={ setSideBarMenuBlog }
            desplegarMenu={ desplegarMenu }
            submenu={['Nuevo blog', 'Blogs', 'Finanzas', 'Economía', 'Bienes Raices']} 
          />
          <SidebarElement 
            title='Servicios'
            state= {sideBarMenuServicio}
            setState={ setSideBarMenuServicio }
            desplegarMenu={ desplegarMenu }
            submenu={['Nuevo Servicio', 'Asesoría', 'Avalúos', 'Publicidad']} 
          />
          <SidebarElement 
            title='Contactos'
            state= {sideBarMenuContacto}
            setState={ setSideBarMenuContacto }
            desplegarMenu={ desplegarMenu }
            submenu={['CRM', 'Nuevos contacto', 'Antigüos', 'Clientes']} 
          />
        </ul>
      </div>
    </div>
    )
}

export default Sidebar
