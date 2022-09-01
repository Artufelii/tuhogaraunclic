import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle, faBell, faEdit, faEllipsisV, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { AdminContext } from '../AdminContext'
import './css/AdminHeader.css'

const AdminHeader = () => {
  const {hiddenSidebar, setHiddenSidebar}= useContext(AdminContext)
  return(
    <div className="admin_header">
      <button 
        onClick={() => setHiddenSidebar(!hiddenSidebar)}
        className="rounded"
      >
        <FontAwesomeIcon icon={ hiddenSidebar ? faEllipsisH : faEllipsisV } />
      </button>
      <div className="searcher">
        <input 
          type="text" 
          placeholder="Buscar ..."
        />
        <button 
          type="submit"
        >
          <FontAwesomeIcon icon={ faSearch } />
        </button>
      </div>
      <div className="admin_profile">
        <FontAwesomeIcon icon={ faUserCircle } style={{cursor:'pointer'}}/>
        <FontAwesomeIcon icon={ faBell } style={{cursor:'pointer'}}/>
        <FontAwesomeIcon icon={ faEdit} style={{cursor:'pointer'}}/>
      </div>
    </div>
  )
}

export default AdminHeader
