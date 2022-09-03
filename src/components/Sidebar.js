import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { AdminContext } from '../AdminContext' 
import logo from '../Logos/Logo_png.webp'
import './css/Sidebar.css'

const Sidebar = () => {
  const history = useHistory()
  const { usuario } = useContext(AdminContext)
  const [showListPropiedades, setShowListPropiedades] = useState(false)
  const [showListClientes, setShowListClientes] = useState(false)
  const [showListUsuarios, setShowListUsuarios] = useState(false)

  const logout = () => {
    sessionStorage.removeItem('token')
    history.push('/admin/login')
  }
  
  return (
    <div className="sidebar">
      <div className="logo">
        <img style={{maxWidth: '100%', maxHeight:'100%', borderRadius: '50%'}} src={logo} alt="Tu Hogar a Un Clic" />
      </div>
      <div className="user">
        <span className="profile">
          {usuario 
            ? <img src={usuario.profile_img} alt={usuario.username} />
            : <FontAwesomeIcon icon={ faUserCircle } />
          }
        </span>
        <span>
          <p>{usuario.username}</p>
          <p>{ usuario.email }</p>
        </span>
      </div>
      <div className="options">
        <div className="option"><Link to='/admin/dashboard'>Dashboard</Link></div>
        <div onClick={ () => setShowListPropiedades(!showListPropiedades) } className="option">
          Propiedades <FontAwesomeIcon icon={showListPropiedades ? faCaretDown : faCaretLeft } />
        </div>
        <ul className="list" hidden={showListPropiedades ? false : true}>
          <li><Link to='/admin/porpiedades/new-property'>Nueva propiedad</Link></li>
          <li><Link to='/admin/propiedades'>Todas las Propiedades</Link></li>
          <li><Link to='/admin/propiedades/venta'>En Venta</Link></li>
          <li><Link to='/admin/propiedades/renta'>En Renta</Link></li>
        </ul>
        <div onClick={ () => setShowListClientes(!showListClientes) } className="option">
          Clientes <FontAwesomeIcon icon={ showListClientes ? faCaretDown : faCaretLeft } />
        </div>
        <ul className="list" hidden={showListClientes ? false : true}>
          <li>Nuevo clientes</li>
          <li>Prospectos</li>
          <li>Clientes</li>
        </ul>
        <div onClick={ () => setShowListUsuarios(!showListUsuarios) } className="option">
          Usuarios <FontAwesomeIcon icon={ showListUsuarios ? faCaretDown : faCaretLeft } />
        </div>
        <ul className="list" hidden={showListUsuarios ? false : true}>
          <li>Nuevo Usuario</li>
          <li>Usuarios</li>
        </ul>
      </div>
      <div className="logout" onClick={logout}>
        Logout
      </div>
    </div>
  )
}

export default Sidebar
