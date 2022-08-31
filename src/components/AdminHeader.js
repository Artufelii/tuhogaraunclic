import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserCircle, faBell, faEdit, faEllipsisV, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import './css/AdminHeader.css'

const AdminHeader = () => {
  const collapsSidebar = () => {

    if(hiddenBar){
      setHiddenBar(false)
    } else {
      setHiddenBar(true)
    }
    
  }

  const [hiddenBar, setHiddenBar] = useState(false)
  return(
    <div className="admin_header">
      <button 
        onClick={ collapsSidebar }
        className="rounded"
      >
        <FontAwesomeIcon icon={ hiddenBar ? faEllipsisH : faEllipsisV } />
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
        <FontAwesomeIcon icon={ faUserCircle } />
        <FontAwesomeIcon icon={ faBell } />
        <FontAwesomeIcon icon={ faEdit} />
      </div>
    </div>
  )
}

export default AdminHeader
